import React, { useState } from 'react';
import styles from './MainPage.module.css';
import Search from '../../components/Search/Search';
import CardsList from '../../components/CardsList/CardsList';
import { joinClassNames } from '../../utils/utils';
import { IMainCard } from 'types/interfaces';
import useFetchByName from '../../hooks/useFetchByName';
import CardModal from '../../components/CardModal/CardModal';

const MainPage = () => {
  const [query, setQuery] = useState(localStorage.getItem('query') || '');
  const [isModalOpen, setModalOpen] = useState(false);
  const [cardId, setCardId] = useState(1);
  const {
    data: cards,
    isLoading,
    isError,
  } = useFetchByName<IMainCard>('https://rickandmortyapi.com/api/character', query);

  const openModal = (setOpen: boolean, cardId: number) => {
    if (setOpen) {
      setCardId(cardId);
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }

  let content;
  if (cards && !isLoading) {
    content = <CardsList cards={cards} />
  } else if (isLoading) {
    content = <div>Loading...</div>
  } else if (isError) {
    content = <div>Error! Please either reload the page. </div>
  }

  return (
    <div className={joinClassNames(styles.main, 'page')}>
      <Search query={query} setQuery={setQuery} />
      {content}
      {isModalOpen && <CardModal openModal={openModal} cardId={cardId}/>}
    </div>
  );
};

export default MainPage;
