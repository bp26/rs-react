import React from 'react';
import styles from './CustomInput.module.css';
import { joinClassNames } from '../../../utils/utils';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface ICustomInputProps {
  type: string;
  name: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

const CustomInput = (props: ICustomInputProps) => {
  const isInvalid = props?.error ? styles.invalid : '';
  const isTextbox = props.type === 'text' || props.type === 'email' ? styles.textbox : '';
  const isCheckbox = props.type === 'checkbox' ? styles.checkbox : '';
  const isFileUpload = props.type === 'file' ? '' : 'input';

  return (
    <fieldset className={joinClassNames(styles.fieldset)}>
      <div className={joinClassNames(styles.wrapper, isCheckbox)}>
        <label className={styles.label}>{props.name}</label>
        <input
          className={joinClassNames(styles.input, isTextbox, isInvalid, isFileUpload)}
          type={props.type}
          {...props.register}
        />
      </div>
      <span className={styles.error}>{props?.error && props.error.message}</span>
    </fieldset>
  );
};

export default CustomInput;
