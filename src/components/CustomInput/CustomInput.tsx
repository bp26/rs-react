import React from 'react';
import styles from './CustomInput.module.css';
import { joinClassNames } from '../../utils/utils';

interface CustomInputProps {
  type: string;
  name: string;
  reference: React.RefObject<HTMLInputElement>;
  error: string;
}

class CustomInput extends React.Component<CustomInputProps> {
  constructor(props: CustomInputProps) {
    super(props);
  }

  render() {
    return (
      <fieldset className={styles.wrapper}>
        <label className={styles.label} htmlFor={this.props.name}>
          {this.props.name}
        </label>
        <input
          className={joinClassNames(styles.input, this.props.error ? styles.invalid : '')}
          id={this.props.name}
          type={this.props.type}
          ref={this.props.reference}
        />
        <span className={styles.error}>{this.props.error}</span>
      </fieldset>
    );
  }
}

export default CustomInput;
