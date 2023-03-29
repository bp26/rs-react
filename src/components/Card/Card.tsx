import React from 'react';
import { CharacterSpecies, CharacterStatus } from '../../types/enums';
import { IMainCard } from 'types/interfaces';
import styles from './Card.module.css';
import aliveImage from '../../assets/images/alive.png';
import deadImage from '../../assets/images/dead.png';
import alienImage from '../../assets/images/alien.png';
import humanImage from '../../assets/images/human.png';

interface ICardProps {
  card: IMainCard;
}

const Card = ({ card }: ICardProps) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={card.image} data-testid="card-image"></img>
      <div className={styles.name} data-testid="card-name">
        {card.name}
      </div>
      <div className={styles.bottom}>
        <img
          className={styles.bottomImage}
          src={card.status === CharacterStatus.ALIVE ? aliveImage : deadImage}
        ></img>
        <img
          className={styles.bottomImage}
          src={card.species === CharacterSpecies.HUMAN ? humanImage : alienImage}
        ></img>
      </div>
    </div>
  );
};

export default Card;
