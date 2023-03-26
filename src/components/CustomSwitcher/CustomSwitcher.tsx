import React from 'react';
import styles from './CustomSwitcher.module.css';
import { ISwitcherRef } from 'types/interfaces';

interface CustomSwitcherProps {
  name: string;
  error: string;
  reference: ISwitcherRef;
  data: { value: string; id: number; ref: string }[];
}

class CustomSwitcher extends React.Component<CustomSwitcherProps> {
  constructor(props: CustomSwitcherProps) {
    super(props);
  }

  render() {
    return (
      <fieldset className={styles.fieldset}>
        <span className={styles.header}>{this.props.name}</span>
        <div className={styles.wrapper}>
          {this.props.data.map((radio) => {
            return (
              <label className={styles.label} htmlFor={radio.value} key={radio.id}>
                <input
                  className={styles.input}
                  id={radio.value}
                  type={'radio'}
                  name={this.props.name}
                  ref={this.props.reference[radio.ref as keyof ISwitcherRef]}
                />
                {radio.value}
              </label>
            );
          })}
        </div>
        <span className={styles.error}>{this.props.error}</span>
      </fieldset>
    );
  }
}

export default CustomSwitcher;
