import React, { useState } from 'react';
import styles from './MainPage.module.css';
import Search from '../../components/Search/Search';
import CardsList from '../../components/CardsList/CardsList';
import { joinClassNames } from '../../utils/utils';
import { IMainCard } from 'types/interfaces';
import useFetch from '../../hooks/useFetch';

const MainPage = () => {
  const [query, setQuery] = useState(localStorage.getItem('query') || '');
  const {
    data: cards,
    isLoading,
    isError,
  } = useFetch<IMainCard>('https://rickandmortyapi.com/api/character?', query);

  return (
    <div className={joinClassNames(styles.main, 'page')}>
      <Search query={query} setQuery={setQuery} />
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error! Please either reload the page or change search query </div>}
      {cards && <CardsList cards={cards} />}
    </div>
  );
};

export default MainPage;
