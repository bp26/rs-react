import React from 'react';
import { joinClassNames } from '../../utils/utils';
import styles from './FormsPage.module.css';
import Form from '../../components/Form/Form';
import { IFormsCard } from 'types/interfaces';
import FormsCard from '../../components/FormsCard/FormsCard';

interface IFormsPageState {
  cards: IFormsCard[];
}

class FormsPage extends React.Component<Record<string, never>, IFormsPageState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  private createCard(card: IFormsCard) {
    this.setState({ cards: [...this.state.cards, card] });
  }

  render() {
    return (
      <div className={joinClassNames(styles.forms, 'page')}>
        <div className={styles.formwrapper}>
          <Form createCard={this.createCard.bind(this)} />
        </div>
        <div className={styles.list}>
          {this.state.cards.map((item, index) => (
            <FormsCard item={item} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default FormsPage;
