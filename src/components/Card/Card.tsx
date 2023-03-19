import React from 'react';
import { CharacterSpecies, CharacterStatus } from '../../types/enums';
import { ICardProps } from 'types/interfaces';
import styles from './Card.module.css';
import aliveImage from '../../assets/images/alive.png';
import deadImage from '../../assets/images/dead.png';
import alienImage from '../../assets/images/alien.png';
import humanImage from '../../assets/images/human.png';

class Card extends React.Component<ICardProps> {
  constructor(props: ICardProps) {
    super(props);
  }

  public render() {
    return (
      <div className={styles.card}>
        <img className={styles.image} src={this.props.character.image}></img>
        <div className={styles.name}>{this.props.character.name}</div>
        <div className={styles.bottom}>
          <img
            className={styles.bottomImage}
            src={this.props.character.status === CharacterStatus.ALIVE ? aliveImage : deadImage}
          ></img>
          <img
            className={styles.bottomImage}
            src={this.props.character.species === CharacterSpecies.HUMAN ? humanImage : alienImage}
          ></img>
        </div>
      </div>
    );
  }
}

export default Card;
