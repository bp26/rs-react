import React from 'react';
import { IFormsCard } from 'types/interfaces';
import styles from './Form.module.css';

interface IFormProps {
  createCard: (card: IFormsCard) => void;
}

class Form extends React.Component<IFormProps> {
  constructor(props: IFormProps) {
    super(props);
  }

  render() {
    return (
      <div className={styles.form}>
        <span>Form</span>
      </div>
    );
  }
}

export default Form;
