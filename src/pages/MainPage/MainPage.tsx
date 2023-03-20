import React from 'react';
import styles from './MainPage.module.css';
import Search from '../../components/Search/Search';
import CardsList from '../../components/CardsList/CardsList';
import characters from '../../assets/data/characters';

class MainPage extends React.Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  public render() {
    return (
      <div className={[styles.main, 'page'].join(' ')}>
        <Search />
        <CardsList data={characters} />
      </div>
    );
  }
}

export default MainPage;
