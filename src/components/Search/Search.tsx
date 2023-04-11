import React from 'react';
import { joinClassNames } from '../../utils/utils';
import styles from './Search.module.css';

interface ISearchProps {
  query: string;
  setQuery: (query: string) => void;
}

const Search = ({ query, setQuery }: ISearchProps) => {
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('query', query);
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
