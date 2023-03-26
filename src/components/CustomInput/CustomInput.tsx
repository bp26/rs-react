import React from 'react';
import styles from './CustomInput.module.css';
import { joinClassNames } from '../../utils/utils';

interface CustomInputProps {
  type: string;
  name: string;
  id: string;
  reference: React.RefObject<HTMLInputElement>;
  error: string;
}

class CustomInput extends React.Component<CustomInputProps> {
  constructor(props: CustomInputProps) {
    super(props);
  }

  render() {
    const isInvalid = this.props.error ? styles.invalid : '';
    const isTextbox =
      this.props.type === 'text' || this.props.type === 'email' ? styles.textbox : '';
    const isCheckbox = this.props.type === 'checkbox' ? styles.checkbox : '';
    const isFileUpload = this.props.type === 'file' ? '' : 'input';

    return (
      <fieldset className={joinClassNames(styles.fieldset)}>
        <div className={joinClassNames(styles.wrapper, isCheckbox)}>
          <label className={styles.label} htmlFor={this.props.id}>
            {this.props.name}
          </label>
          <input
            className={joinClassNames(styles.input, isTextbox, isInvalid, isFileUpload)}
            id={this.props.id}
            type={this.props.type}
            ref={this.props.reference}
          />
        </div>
        <span className={styles.error}>{this.props.error}</span>
      </fieldset>
    );
  }
}

export default CustomInput;
