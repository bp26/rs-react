import React from 'react';
import styles from './CustomSwitcher.module.css';
import { ISwitcherRef } from 'types/interfaces';

interface ICustomSwitcherProps {
  name: string;
  error: string;
  reference: ISwitcherRef;
  data: { value: string; id: number; ref: string }[];
}

const CustomSwitcher = (props: ICustomSwitcherProps) => {
  return (
    <fieldset className={styles.fieldset}>
      <span className={styles.header}>{props.name}</span>
      <div className={styles.wrapper}>
        {props.data.map((radio) => {
          return (
            <label className={styles.label} htmlFor={radio.value} key={radio.id}>
              <input
                className={styles.input}
                id={radio.value}
                type={'radio'}
                name={props.name}
                ref={props.reference[radio.ref as keyof ISwitcherRef]}
              />
              {radio.value}
            </label>
          );
        })}
      </div>
      <span className={styles.error}>{props.error}</span>
    </fieldset>
  );
};

export default CustomSwitcher;
