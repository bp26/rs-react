import React from 'react';
import styles from './CustomSelect.module.css';

interface CustomSelectProps {
  name: string;
  reference: React.RefObject<HTMLSelectElement>;
  error: string;
  data: { value: string; id: number }[];
}

class CustomSelect extends React.Component<CustomSelectProps> {
  constructor(props: CustomSelectProps) {
    super(props);
  }

  render() {
    return (
      <fieldset className={styles.fieldset}>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor={this.props.name}>
            {this.props.name}
          </label>
          <select ref={this.props.reference}>
            {this.props.data.map((option) => {
              return (
                <option key={option.id} value={option.value}>
                  {option.value}
                </option>
              );
            })}
          </select>
        </div>
        <span className={styles.error}>{this.props.error}</span>
      </fieldset>
    );
  }
}

export default CustomSelect;
