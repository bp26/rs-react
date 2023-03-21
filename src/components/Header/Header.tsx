import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { HeaderPageName } from '../../types/enums';

export interface IHeaderState {
  page: string;
}

class Header extends React.Component<Record<string, never>, IHeaderState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      page: this.getPage(),
    };
  }

  private getPage() {
    const location = window.location.pathname;
    switch (location) {
      case '/':
        return HeaderPageName.MAIN;
      case '/about':
        return HeaderPageName.ABOUT;
      case '/forms':
        return HeaderPageName.FORMS;
      default:
        return HeaderPageName.ERROR;
    }
  }

  private setPage(page: string) {
    this.setState({ page });
  }

  public render(): JSX.Element {
    return (
      <div className={styles.header}>
        <h1 className={styles.name} data-testid="header-name">
          {this.state.page}
        </h1>
        <nav className={styles.navigation}>
          <NavLink
            className={styles.link}
            to={'/'}
            onClick={() => this.setPage(HeaderPageName.MAIN)}
            data-testid="header-mainlink"
          >
            Main
          </NavLink>
          <NavLink
            className={styles.link}
            to={'/about'}
            onClick={() => this.setPage(HeaderPageName.ABOUT)}
            data-testid="header-aboutlink"
          >
            About
          </NavLink>
          <NavLink
            className={styles.link}
            to={'/forms'}
            onClick={() => this.setPage(HeaderPageName.FORMS)}
            data-testid="header-formslink"
          >
            Forms
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Header;
