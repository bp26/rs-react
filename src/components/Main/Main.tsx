import React from 'react';
import styles from './Main.module.css';
import Search from '../Search/Search';
import Card from '../Card/Card';
import characters from '../../assets/data/characters';

class Main extends React.Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  public render() {
    return (
      <div className={[styles.main, 'page'].join(' ')}>
        <Search />
        <ul className={styles.list}>
          {characters.map((character) => (
            <li className={styles.item} key={character.id}>
              <Card character={character} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;
