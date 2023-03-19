import React from 'react';
import styles from './Main.module.css';
import Search from '../Search/Search';
import CardsList from '../../components/CardsList/CardsList';
import characters from '../../assets/data/characters';

class Main extends React.Component {
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

export default Main;
