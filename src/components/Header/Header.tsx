import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { IHeaderState } from 'types/interfaces';
import { HeaderPageName } from '../../types/enums';

class Header extends React.Component<Record<string, never>, IHeaderState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      page: this.getPage(),
    };
  }

  private getPage() {
    const location = window.location.pathname;
    return location === '/' ? HeaderPageName.MAIN : HeaderPageName.ABOUT;
  }

  private setPage(page: string) {
    this.setState({ page });
  }

  public render(): JSX.Element {
    return (
      <div className={styles.header}>
        <h1>{this.state.page}</h1>
        <NavLink to={'/'} onClick={() => this.setPage(HeaderPageName.MAIN)}>
          Main
        </NavLink>
        <NavLink to={'/about'} onClick={() => this.setPage(HeaderPageName.ABOUT)}>
          About
        </NavLink>
      </div>
    );
  }
}

export default Header;