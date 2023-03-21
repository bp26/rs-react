import React from 'react';
import { joinClassNames } from '../../utils/utils';
import styles from './FormsPage.module.css';

class FormsPage extends React.Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render() {
    return (
      <div className={joinClassNames(styles.forms, 'page')}>
        <span>Forms</span>
      </div>
    );
  }
}

export default FormsPage;
