import React from 'react';
import styles from './CustomSelect.module.css';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface ICustomSelectProps {
  name: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
  data: { value: string; id: number }[];
}

const CustomSelect = (props: ICustomSelectProps) => {
  return (
    <fieldset className={styles.fieldset}>
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={props.name}>
          {props.name}
        </label>
        <select {...props.register}>
          {props.data.map((option) => {
            return (
              <option key={option.id} value={option.value}>
                {option.value}
              </option>
            );
          })}
        </select>
      </div>
      <span className={styles.error}>{props?.error && props.error.message}</span>
    </fieldset>
  );
};

export default CustomSelect;
