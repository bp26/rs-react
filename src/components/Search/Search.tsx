import React, { useRef } from 'react';
import { joinClassNames } from '../../utils/utils';
import styles from './Search.module.css';

interface ISearchProps {
  query: string;
  setQuery: (query: string) => void;
}

const Search = ({ query, setQuery }: ISearchProps) => {
  const searchInput = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = searchInput.current?.value || '';
    localStorage.setItem('query', value);
    setQuery(value);
  };

  return (
    <form className={styles.search} onSubmit={onSubmit}>
      <input
        className={joinClassNames(styles.input, 'input')}
        type="text"
        defaultValue={query}
        ref={searchInput}
        data-testid="search-input"
      />
      <input className={'button'} type="submit" value="Submit" />
    </form>
  );
};

export default Search;
