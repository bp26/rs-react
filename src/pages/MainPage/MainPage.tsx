import React, { useState } from 'react';
import styles from './MainPage.module.css';
import Search from '../../components/Search/Search';
import CardsList from '../../components/CardsList/CardsList';
import { joinClassNames } from '../../utils/utils';
import { IMainCard } from 'types/interfaces';
import useFetchByQuery from '../../hooks/useFetchByQuery';
import CardModal from '../../components/CardModal/CardModal';
import { apiLink } from '../../config/config';

const MainPage = () => {
  const [query, setQuery] = useState(localStorage.getItem('query') || '');
  const [isModalOpen, setModalOpen] = useState(false);
  const [cardId, setCardId] = useState(1);
  const { data: cards, isLoading, isError } = useFetchByQuery<IMainCard>(apiLink, 'name', query);

  const openModal = (cardId: number) => {
    setCardId(cardId);
    setModalOpen(true);
  };

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isError) {
    content = <div>Error! Please change search query. </div>;
  } else if (cards) {
    content = <CardsList cards={cards} openModal={openModal} />;
  }

  return (
    <div className={joinClassNames(styles.main, 'page')}>
      <Search query={query} setQuery={setQuery} />
      {content}
      {isModalOpen && <CardModal setModalOpen={setModalOpen} cardId={cardId} />}
    </div>
  );
};

export default MainPage;
