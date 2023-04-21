import React from 'react';
import { joinClassNames } from '../../utils/utils';
import styles from './FormsPage.module.css';
import Form from '../../components/Form/Form';
import FormsCard from '../../components/FormsCard/FormsCard';
import { useSelector } from 'react-redux';
import { selectCards } from '../../store/features/formSlice';

const FormsPage = () => {
  const cards = useSelector(selectCards);

  return (
    <div className={joinClassNames(styles.forms, 'page')}>
      <div className={styles.formwrapper}>
        <Form />
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
