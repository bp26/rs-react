import React from 'react';
import { IFormsCard } from '../../types/interfaces';

import styles from './FormsCard.module.css';

interface IFormsCardProps {
  item: IFormsCard;
}

class FormsCard extends React.Component<IFormsCardProps> {
  constructor(props: IFormsCardProps) {
    super(props);
  }

  public render() {
    return (
      <div className={styles.card}>
        <img className={styles.image} src={this.props.item.avatar}></img>
        <div className={styles.content}>
          <h3 className={styles.name}>{this.props.item.name}</h3>
          <span>Gender: {this.props.item.gender}</span>
          <span>Birthday: {this.props.item.date}</span>
          <span>Language: {this.props.item.language}</span>
          <span>Email: {this.props.item.email}</span>
        </div>
      </div>
    );
  }
}

export default FormsCard;
