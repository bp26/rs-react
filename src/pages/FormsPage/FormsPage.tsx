import React, { useState } from 'react';
import { joinClassNames } from '../../utils/utils';
import styles from './FormsPage.module.css';
import Form from '../../components/Form/Form';
import { IFormsCard } from 'types/interfaces';
import FormsCard from '../../components/FormsCard/FormsCard';

const FormsPage = () => {
  const [cards, setCards] = useState<IFormsCard[]>([]);

  const createCard = (card: IFormsCard) => {
    setCards((prevState) => [...prevState, card]);
  };

  return (
    <div className={joinClassNames(styles.forms, 'page')}>
      <div className={styles.formwrapper}>
        <Form createCard={createCard} />
      </div>
      <div className={styles.list}>
        {cards.map((card, index) => (
          <FormsCard card={card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FormsPage;
