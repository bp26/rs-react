import React from 'react';
import { IFormsCard } from 'types/interfaces';
import styles from './Form.module.css';
import CustomInput from '../CustomInput/CustomInput';
import { SIMPLE_INPUTS, LANGUAGE_DATA, GENDER_DATA } from '../../utils/constants';
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import {
  validateCheckbox,
  validateFile,
  validateSelect,
  validateSwitcher,
} from '../../utils/validation/validation';
import CustomSwitcher from '../../components/CustomSwitcher/CustomSwitcher';

interface IFormProps {
  createCard: (card: IFormsCard) => void;
}

interface IFormState {
  nameError: string;
  emailError: string;
  checkboxError: string;
  birthdayError: string;
  languageError: string;
  genderError: string;
  avatarError: string;
}

class Form extends React.Component<IFormProps, IFormState> {
  private form = React.createRef<HTMLFormElement>();
  private name = React.createRef<HTMLInputElement>();
  private email = React.createRef<HTMLInputElement>();
  private checkbox = React.createRef<HTMLInputElement>();
  private birthday = React.createRef<HTMLInputElement>();
  private language = React.createRef<HTMLSelectElement>();
  private maleGender = React.createRef<HTMLInputElement>();
  private femaleGender = React.createRef<HTMLInputElement>();
  private avatar = React.createRef<HTMLInputElement>();

  constructor(props: IFormProps) {
    super(props);
    this.state = {
      nameError: '',
      emailError: '',
      checkboxError: '',
      birthdayError: '',
      languageError: '',
      genderError: '',
      avatarError: '',
    };

    this.submit = this.submit.bind(this);
    this.setError = this.setError.bind(this);
  }

  private setError(type: string, error: string) {
    this.setState((prevState) => ({
      ...prevState,
      [type]: error,
    }));
  }

  private resetForm() {
    this.form.current?.reset();
  }

  private getAvatarSrc() {
    const files = this.avatar.current!.files;
    if (files) {
      return URL.createObjectURL(files[0]);
    } else {
      return '';
    }
  }

  private getGender() {
    return this.maleGender.current!.checked ? 'Male' : 'Female';
  }

  private submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let isValid = true;

    SIMPLE_INPUTS.forEach((input) => {
      const value = (this[input.key as keyof this] as React.RefObject<HTMLInputElement>).current
        ?.value;
      if (input.validation && !input.validation(value, this.setError)) {
        isValid = false;
      }
    });
    if (!validateCheckbox(this.checkbox.current?.checked, this.setError)) {
      isValid = false;
    }
    if (!validateSelect(this.language.current?.value, this.setError)) {
      isValid = false;
    }
    if (
      !validateSwitcher(
        this.maleGender.current?.checked,
        this.femaleGender.current?.checked,
        this.setError
      )
    ) {
      isValid = false;
    }
    if (!validateFile(this.avatar.current?.value, this.setError)) {
      isValid = false;
    }

    if (isValid) {
      this.props.createCard({
        name: this.name.current!.value,
        email: this.email.current!.value,
        avatar: this.getAvatarSrc(),
        language: this.language.current!.value,
        gender: this.getGender(),
        date: this.birthday.current!.value,
      });
      this.resetForm();
    }
  }

  render() {
    return (
      <form onSubmit={this.submit} className={styles.form} noValidate={true} ref={this.form}>
        {SIMPLE_INPUTS.map((input) => (
          <CustomInput
            key={input.id}
            type={input.type}
            name={input.name}
            id={input.key}
            reference={this[input.key as keyof this] as React.RefObject<HTMLInputElement>}
            error={this.state[input.error as keyof IFormState]}
          />
        ))}
        <CustomSelect
          name="Language:"
          reference={this.language}
          error={this.state.languageError}
          data={LANGUAGE_DATA}
        />
        <CustomSwitcher
          name={'Choose your gender:'}
          error={this.state.genderError}
          data={GENDER_DATA}
          reference={{
            firstOption: this.maleGender,
            secondOption: this.femaleGender,
          }}
        />
        <CustomInput
          type={'file'}
          name={'Choose your avatar:'}
          id={'avatar'}
          reference={this.avatar}
          error={this.state.avatarError}
        />
        <CustomInput
          type={'checkbox'}
          name={'I consent to having my data processed'}
          id={'checkbox'}
          reference={this.checkbox}
          error={this.state.checkboxError}
        />
        <fieldset className={styles.buttons}>
          <input className="button" type={'submit'} value={'Create card'} />
          <input type={'reset'} className="button" value={'Reset'} />
        </fieldset>
      </form>
    );
  }
}

export default Form;
