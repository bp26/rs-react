import React, { useRef } from 'react';
import { joinClassNames } from '../../utils/utils';
import styles from './Search.module.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { selectQuery, setQuery } from '../../store/features/searchSlice';

const Search = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = searchInput.current?.value || '';
    dispatch(setQuery(value));
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
