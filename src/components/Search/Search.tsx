import React, { useState, useEffect, useRef } from 'react';
import { joinClassNames } from '../../utils/utils';
import styles from './Search.module.css';

const Search = () => {
  const [query, setQuery] = useState(localStorage.getItem('query') || '');
  const queryRef = useRef<string>('');

  useEffect(() => {
    return () => {
      queryRef.current = query;
    };
  }, [query]);

  useEffect(() => {
    const setLocalStorage = () => {
      localStorage.setItem('query', queryRef.current);
    };
    window.onbeforeunload = () => setLocalStorage();

    return () => {
      setLocalStorage();
    };
  }, []);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.search} onSubmit={onSubmit}>
      <input
        className={joinClassNames(styles.input, 'input')}
        type="text"
        value={query}
        onChange={onChange}
        data-testid="search-input"
      />
      <input className={'button'} type="submit" value="Submit" />
    </form>
  );
};

export default Search;
