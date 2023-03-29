import React from 'react';
import { IFormsCard } from '../../types/interfaces';

import styles from './FormsCard.module.css';

interface IFormsCardProps {
  card: IFormsCard;
}

const FormsCard = ({ card }: IFormsCardProps) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={card.avatar}></img>
      <div className={styles.content}>
        <h3 className={styles.name}>{card.name}</h3>
        <span>Gender: {card.gender}</span>
        <span>Birthday: {card.date}</span>
        <span>Language: {card.language}</span>
        <span>Email: {card.email}</span>
      </div>
    </div>
  );
};

export default FormsCard;
