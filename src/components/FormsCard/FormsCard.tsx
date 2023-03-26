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
        <img className={styles.avatar} src={this.props.item.avatar}></img>
        <div className={styles.content}>
          <span>{this.props.item.name}</span>
          <span>{this.props.item.email}</span>
          <span>{this.props.item.date}</span>
          <span>{this.props.item.gender}</span>
          <span>{this.props.item.language}</span>
        </div>
      </div>
    );
  }
}

export default FormsCard;
