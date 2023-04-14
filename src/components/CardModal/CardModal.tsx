import React from 'react';
import { createPortal } from 'react-dom';
import styles from './CardModal.module.css';
import { IMainCard } from 'types/interfaces';
import useFetchById from '../../hooks/useFetchById';
import { apiLink } from '../../config/config';
import { CharacterStatus } from '../../types/enums';
import { CharacterSpecies } from '../../types/enums';
import aliveImage from '../../assets/images/alive.png';
import deadImage from '../../assets/images/dead.png';
import alienImage from '../../assets/images/alien.png';
import humanImage from '../../assets/images/human.png';

interface Props {
  setModalOpen: (setOpen: boolean) => void;
  cardId: number;
}

const CardModal = ({ setModalOpen, cardId }: Props) => {
  const { data: card, isLoading } = useFetchById<IMainCard>(apiLink, cardId);

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (card) {
    content = (
      <div>
        <button onClick={() => setModalOpen(false)}>Close</button>
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
  }

  return createPortal(
    <div className={styles.backdrop}>
      <div className={styles.modal}>{content}</div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default CardModal;
