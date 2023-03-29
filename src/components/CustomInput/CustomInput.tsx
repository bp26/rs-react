import React from 'react';
import styles from './CustomInput.module.css';
import { joinClassNames } from '../../utils/utils';

interface ICustomInputProps {
  type: string;
  name: string;
  id: string;
  reference: React.RefObject<HTMLInputElement>;
  error: string;
}

const CustomInput = (props: ICustomInputProps) => {
  const isInvalid = props.error ? styles.invalid : '';
  const isTextbox = props.type === 'text' || props.type === 'email' ? styles.textbox : '';
  const isCheckbox = props.type === 'checkbox' ? styles.checkbox : '';
  const isFileUpload = props.type === 'file' ? '' : 'input';

  return (
    <fieldset className={joinClassNames(styles.fieldset)}>
      <div className={joinClassNames(styles.wrapper, isCheckbox)}>
        <label className={styles.label} htmlFor={props.id}>
          {props.name}
        </label>
        <input
          className={joinClassNames(styles.input, isTextbox, isInvalid, isFileUpload)}
          id={props.id}
          type={props.type}
          ref={props.reference}
        />
      </div>
      <span className={styles.error}>{props.error}</span>
    </fieldset>
  );
};

export default CustomInput;
