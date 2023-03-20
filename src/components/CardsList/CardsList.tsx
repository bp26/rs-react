import React from 'react';
import styles from './CardsList.module.css';
import Card from '../Card/Card';
import { ICharacter } from 'types/interfaces';

export interface ICardsListProps {
  data: ICharacter[];
}

class CardsList extends React.Component<ICardsListProps> {
  constructor(props: ICardsListProps) {
    super(props);
  }

  public render() {
    return (
      <ul className={styles.list}>
        {this.props.data.map((item) => (
          <li className={styles.item} key={item.id} data-testid="cardsList-item">
            <Card item={item} />
          </li>
        ))}
      </ul>
    );
  }
}

export default CardsList;
