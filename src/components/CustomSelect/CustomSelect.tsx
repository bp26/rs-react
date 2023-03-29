import React from 'react';
import styles from './CustomSelect.module.css';

interface ICustomSelectProps {
  name: string;
  reference: React.RefObject<HTMLSelectElement>;
  error: string;
  data: { value: string; id: number }[];
}

const CustomSelect = (props: ICustomSelectProps) => {
  return (
    <fieldset className={styles.fieldset}>
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={props.name}>
          {props.name}
        </label>
        <select ref={props.reference}>
          {props.data.map((option) => {
            return (
              <option key={option.id} value={option.value}>
                {option.value}
              </option>
            );
          })}
        </select>
      </div>
      <span className={styles.error}>{props.error}</span>
    </fieldset>
  );
};

export default CustomSelect;
