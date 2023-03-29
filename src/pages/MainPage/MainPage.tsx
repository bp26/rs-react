import React from 'react';
import styles from './MainPage.module.css';
import Search from '../../components/Search/Search';
import CardsList from '../../components/CardsList/CardsList';
import characters from '../../assets/data/characters';
import { joinClassNames } from '../../utils/utils';

const MainPage = () => {
  return (
    <div className={joinClassNames(styles.main, 'page')}>
      <Search />
      <CardsList cards={characters} />
    </div>
  );
};

export default MainPage;
