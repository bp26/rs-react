import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCards } from '../../store/features/formSlice';
import styles from './Form.module.css';
import CustomInput from './CustomInput/CustomInput';
import { LANGUAGE_DATA, GENDER_DATA } from '../../utils/constants';
import CustomSelect from './CustomSelect/CustomSelect';
import CustomSwitcher from './CustomSwitcher/CustomSwitcher';
import { joinClassNames } from '../../utils/utils';
import { useForm } from 'react-hook-form';
import {
  validateBirthday,
  validateCheckbox,
  validateEmail,
  validateFile,
  validateName,
  validateSelect,
  validateSwitcher,
} from '../../utils/validation/validation';

interface IFormValues {
  name: string;
  email: string;
  checkbox: boolean;
  birthday: string;
  language: string;
  gender: string;
  avatar: FileList;
}

const Form = () => {
  const [notification, setNotification] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const showNotification = () => {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 4000);
  };

  const onSubmit = (data: IFormValues) => {
    const card = {
      name: data.name,
      email: data.email,
      date: data.birthday,
      language: data.language,
      gender: data.gender,
      avatar: URL.createObjectURL(data.avatar[0]),
    };
    dispatch(setCards(card));
    showNotification();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate={true}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <CustomInput
            type={'text'}
            name={'Full name:'}
            register={register('name', {
              validate: {
                isValid: (name) => validateName(name),
              },
            })}
            error={errors.name}
          />
          <CustomInput
            type={'email'}
            name={'Email:'}
            register={register('email', {
              validate: {
                isValid: (email) => validateEmail(email),
              },
            })}
            error={errors.email}
          />
          <CustomInput
            type={'date'}
            name={'Birthday:'}
            register={register('birthday', {
              validate: {
                isValid: (date) => validateBirthday(date),
              },
            })}
            error={errors.birthday}
          />
        </div>
        <div className={styles.right}>
          <CustomSelect
            name={'Language:'}
            register={register('language', {
              validate: {
                isValid: (value) => validateSelect(value),
              },
            })}
            error={errors.language}
            data={LANGUAGE_DATA}
          />
          <CustomSwitcher
            name={'Choose your gender:'}
            error={errors.gender}
            data={GENDER_DATA}
            register={register('gender', {
              validate: {
                isValid: (value) => validateSwitcher(value),
              },
            })}
          />
          <CustomInput
            type={'file'}
            name={'Choose your avatar:'}
            register={register('avatar', {
              validate: {
                isValid: (fileList) => validateFile(fileList),
              },
            })}
            error={errors.avatar}
          />
        </div>
      </div>
      <div className={styles.checkbox}>
        <CustomInput
          type={'checkbox'}
          name={'I consent to having my data processed'}
          register={register('checkbox', {
            validate: {
              isValid: (value) => validateCheckbox(value),
            },
          })}
          error={errors.checkbox}
        />
      </div>
      <fieldset className={styles.buttons}>
        <input className="button" type={'submit'} value={'Create card'} />
        <input type={'reset'} className="button" value={'Reset'} />
      </fieldset>
      <div className={joinClassNames(styles.notification, notification ? styles.visible : '')}>
        Card created!
      </div>
    </form>
  );
};

export default Form;
