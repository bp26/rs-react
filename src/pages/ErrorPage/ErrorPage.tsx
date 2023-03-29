import React from 'react';
import { joinClassNames } from '../../utils/utils';
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={joinClassNames(styles.error, 'page')}>
      <h1 className={styles.message}>404</h1>
    </div>
  );
};

export default ErrorPage;
