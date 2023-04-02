import React from 'react';
import { joinClassNames } from '../../utils/utils';
import styles from './AboutPage.module.css';

class AboutPage extends React.Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render() {
    return (
      <div className={joinClassNames(styles.about, 'page')}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium minus a laudantium
          ipsam nisi sit beatae consectetur unde iusto reiciendis quia commodi libero tempore fuga
          officiis delectus labore, explicabo mollitia.
        </p>
      </div>
    );
  }
}

export default AboutPage;
