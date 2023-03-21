import React, { LegacyRef } from 'react';
import { IFormsCard } from 'types/interfaces';
import styles from './Form.module.css';

interface IFormProps {
  createCard: (card: IFormsCard) => void;
}

class Form extends React.Component<IFormProps> {
  private firstName = React.createRef<HTMLInputElement>();
  private lastName = React.createRef<HTMLInputElement>();
  private email = React.createRef<HTMLInputElement>();
  private checkbox = React.createRef<HTMLInputElement>();

  constructor(props: IFormProps) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  private submit(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    const obj = {
      firstName: this.firstName.current?.value,
      lastName: this.lastName.current?.value,
      email: this.email.current?.value,
      checkbox: this.checkbox.current?.checked,
    };
    console.log(obj);
  }

  render() {
    return (
      <div className={styles.form}>
        <fieldset>
          <input type={'text'} ref={this.firstName} placeholder="First name"></input>
        </fieldset>
        <fieldset>
          <input type={'text'} ref={this.lastName} placeholder="Last name"></input>
        </fieldset>
        <fieldset>
          <input type={'email'} ref={this.email} placeholder="Email"></input>
        </fieldset>
        <fieldset>
          <label>
            <input type={'checkbox'} ref={this.checkbox}></input>
            Do you consent?
          </label>
        </fieldset>
        <fieldset>
          <input type={'submit'} onClick={this.submit}></input>
        </fieldset>
      </div>
    );
  }
}

export default Form;
