import React from 'react';
import styles from './CustomSelect.module.css';
import { joinClassNames } from '../../utils/utils';
import { Language } from 'types/enums';

interface CustomSelectProps {
  name: string;
  reference: React.RefObject<HTMLSelectElement>;
  error: string;
}

class CustomSelect extends React.Component<CustomSelectProps> {
  constructor(props: CustomSelectProps) {
    super(props);
  }

  render() {
    return (
      <fieldset className={styles.wrapper}>
        <label className={styles.label} htmlFor={this.props.name}>
          {this.props.name}
        </label>
        <select ref={this.props.reference}>
          <option value={Language.EN}>{Language.EN}</option>
          <option value={Language.RU}>{Language.RU}</option>
          <option value={Language.BE}>{Language.BE}</option>
        </select>
        <span className={styles.error}>{this.props.error}</span>
      </fieldset>
    );
  }
}

export default CustomSelect;
