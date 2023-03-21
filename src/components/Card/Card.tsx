import React from 'react';
import { CharacterSpecies, CharacterStatus } from '../../types/enums';
import { ICharacter } from 'types/interfaces';
import styles from './Card.module.css';
import aliveImage from '../../assets/images/alive.png';
import deadImage from '../../assets/images/dead.png';
import alienImage from '../../assets/images/alien.png';
import humanImage from '../../assets/images/human.png';

interface ICardProps {
  item: ICharacter;
}

class Card extends React.Component<ICardProps> {
  constructor(props: ICardProps) {
    super(props);
  }

  public render() {
    return (
      <div className={styles.card}>
        <img className={styles.image} src={this.props.item.image} data-testid="card-image"></img>
        <div className={styles.name} data-testid="card-name">
          {this.props.item.name}
        </div>
        <div className={styles.bottom}>
          <img
            className={styles.bottomImage}
            src={this.props.item.status === CharacterStatus.ALIVE ? aliveImage : deadImage}
          ></img>
          <img
            className={styles.bottomImage}
            src={this.props.item.species === CharacterSpecies.HUMAN ? humanImage : alienImage}
          ></img>
        </div>
      </div>
    );
  }
}

export default Card;
