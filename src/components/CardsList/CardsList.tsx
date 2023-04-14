import React from 'react';
import styles from './CardsList.module.css';
import Card from '../Card/Card';
import { IMainCard } from 'types/interfaces';

interface ICardsListProps {
  cards: IMainCard[];
  openModal: (id: number) => void;
}

const CardsList = ({ cards, openModal }: ICardsListProps) => {
  return (
    <ul className={styles.list}>
      {cards.map((card) => (
        <li
          className={styles.item}
          key={card.id}
          data-testid="cardsList-item"
          onClick={() => openModal(card.id)}
        >
          <Card card={card} />
        </li>
      ))}
    </ul>
  );
};

export default CardsList;
