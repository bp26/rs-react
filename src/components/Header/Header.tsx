import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { HeaderPageName } from '../../types/enums';

const Header = () => {
  const location = useLocation();

  const getPageName = () => {
    switch (location.pathname) {
      case '/':
        return HeaderPageName.MAIN;
      case '/about':
        return HeaderPageName.ABOUT;
      case '/forms':
        return HeaderPageName.FORMS;
      default:
        return HeaderPageName.ERROR;
    }
  };

  return (
    <div className={styles.header}>
      <h1 className={styles.name} data-testid="header-name">
        {getPageName()}
      </h1>
      <nav className={styles.navigation}>
        <NavLink className={styles.link} to={'/'} data-testid="header-mainlink">
          Main
        </NavLink>
        <NavLink className={styles.link} to={'/about'} data-testid="header-aboutlink">
          About
        </NavLink>
        <NavLink className={styles.link} to={'/forms'} data-testid="header-formslink">
          Forms
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
