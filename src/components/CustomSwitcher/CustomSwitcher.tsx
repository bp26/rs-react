import React from 'react';
import styles from './CustomSwitcher.module.css';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface ICustomSwitcherProps {
  name: string;
  error: FieldError | undefined;
  register: UseFormRegisterReturn;
  data: { value: string; id: number }[];
}

const CustomSwitcher = (props: ICustomSwitcherProps) => {
  return (
    <fieldset className={styles.fieldset}>
      <span className={styles.header}>{props.name}</span>
      <div className={styles.wrapper}>
        {props.data.map((radio) => {
          return (
            <label className={styles.label} key={radio.id} htmlFor={props.register.name}>
              <input
                className={styles.input}
                type={'radio'}
                {...props.register}
                value={radio.value}
              />
              {radio.value}
            </label>
          );
        })}
      </div>
      <span className={styles.error}>{props?.error && props.error.message}</span>
    </fieldset>
  );
};

export default CustomSwitcher;
