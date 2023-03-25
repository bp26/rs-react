import React from 'react';
import { IFormsCard } from 'types/interfaces';
import styles from './Form.module.css';
import CustomInput from '../CustomInput/CustomInput';
import { FORM_INPUTS } from '../../utils/constants';

interface IFormProps {
  createCard: (card: IFormsCard) => void;
}

interface IFormState {
  nameError: string;
  emailError: string;
  checkboxError: string;
  birthdayError: string;
}

class Form extends React.Component<IFormProps, IFormState> {
  private name = React.createRef<HTMLInputElement>();
  private email = React.createRef<HTMLInputElement>();
  private checkbox = React.createRef<HTMLInputElement>();
  private birthday = React.createRef<HTMLInputElement>();

  constructor(props: IFormProps) {
    super(props);
    this.state = {
      nameError: '',
      emailError: '',
      checkboxError: '',
      birthdayError: '',
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

  private submit(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();

    let isValid = true;
    FORM_INPUTS.forEach((input) => {
      if (input.validation) {
        isValid = input.validation(
          (this[input.key as keyof this] as React.RefObject<HTMLInputElement>).current?.value,
          this.setError
        );
      }
    });

    if (isValid) {
      console.log('good');
    }
  }

  render() {
    return (
      <form className={styles.form}>
        {FORM_INPUTS.map((input) => (
          <CustomInput
            key={input.id}
            type={input.type}
            name={input.name}
            reference={this[input.key as keyof this] as React.RefObject<HTMLInputElement>}
            error={this.state[input.error as keyof IFormState]}
          />
        ))}
        <fieldset>
          <input type={'submit'} onClick={this.submit}></input>
        </fieldset>
      </form>
    );
  }
}

export default Form;
