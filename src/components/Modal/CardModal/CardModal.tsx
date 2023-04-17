import React, { Fragment } from 'react';
import styles from './CardModal.module.css';
import { joinClassNames } from '../../../utils/utils';
import Spinner from '../../../components/Spinner/Spinner';
import { useGetCharacterByIdQuery } from '../../../store/features/apiSlice';

interface Props {
  closeModal: () => void;
  cardId: number;
}

const CardModal = ({ closeModal, cardId }: Props) => {
  const { data: card, isLoading, isError } = useGetCharacterByIdQuery(cardId);

  let content;
  if (isLoading) {
    content = <Spinner />;
  } else if (isError) {
    content = <div data-testid="cardmodal-error">Error!</div>;
  } else if (card) {
    content = (
      <Fragment>
        <span
          className={joinClassNames(styles.close)}
          onClick={closeModal}
          data-testid="cardmodal-name"
        ></span>
        <div className={styles.top}>
          <img className={styles.image} src={card.image} data-testid="card-image"></img>
        </div>
        <div className={styles.bottom}>
          <h3 className={styles.name} data-testid="card-name">
            {card.name}
          </h3>
          <div className={styles.info}>
            <div className={styles.infobubble}>Gender: {card.gender}</div>
            <div className={styles.infobubble}>Species: {card.species}</div>
            <div className={styles.infobubble}>Status: {card.status}</div>
            <div className={styles.infobubble}>
              First seen in episode: {card.episode.at(0)!.split('/').at(-1)}
            </div>
            <div className={styles.infobubble}>
              Last seen in episode: {card.episode.at(-1)!.split('/').at(-1)}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  return <div className={styles.content}>{content}</div>;
};

export default CardModal;
