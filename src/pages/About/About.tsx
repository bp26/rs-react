import React from 'react';
import styles from './About.module.css';

class About extends React.Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render() {
    return (
      <div className={[styles.about, 'page'].join(' ')}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium minus a laudantium
          ipsam nisi sit beatae consectetur unde iusto reiciendis quia commodi libero tempore fuga
          officiis delectus labore, explicabo mollitia.
        </p>
      </div>
    );
  }
}

export default About;
