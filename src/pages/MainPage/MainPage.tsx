import React, { useState } from 'react';
import styles from './MainPage.module.css';
import Search from '../../components/Search/Search';
import CardsList from '../../components/CardsList/CardsList';
import { joinClassNames } from '../../utils/utils';
import { IMainCard } from 'types/interfaces';
import useFetchByQuery from '../../hooks/useFetchByQuery';
import CardModal from '../../components/Modal/CardModal/CardModal';
import Modal from '../../components/Modal/Modal';
import { apiLink } from '../../config/config';
import Spinner from '../../components/Spinner/Spinner';

const MainPage = () => {
  const [query, setQuery] = useState(localStorage.getItem('query') || '');
  const [isModalOpen, setModalOpen] = useState(false);
  const [cardId, setCardId] = useState(1);
  const { data: cards, isLoading, isError } = useFetchByQuery<IMainCard>(apiLink, 'name', query);

  const openModal = (cardId: number) => {
    setCardId(cardId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  let content = <Spinner />;
  if (isLoading) {
    content = <Spinner />;
  } else if (isError) {
    content = <div>Error! Please change search query. </div>;
  } else if (cards) {
    content = <CardsList cards={cards} openModal={openModal} />;
  }

  return (
    <div className={joinClassNames(styles.main, 'page')}>
      <Search query={query} setQuery={setQuery} />
      {content}
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <CardModal closeModal={closeModal} cardId={cardId} />
        </Modal>
      )}
    </div>
  );
};

export default MainPage;
