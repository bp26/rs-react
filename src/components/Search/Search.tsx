import React from 'react';
import styles from './Search.module.css';

export interface ISearchState {
  query: string;
}

class Search extends React.Component<Record<string, never>, ISearchState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      query: this.getLSQuery(),
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.setLSQuery = this.setLSQuery.bind(this);
  }

  public componentDidMount(): void {
    window.onbeforeunload = () => this.setLSQuery();
  }

  public componentWillUnmount(): void {
    this.setLSQuery();
    window.onbeforeunload = () => null;
  }

  private getLSQuery(): string {
    const query = localStorage.getItem('query');
    return query ? query : '';
  }

  private setLSQuery(): void {
    localStorage.setItem('query', this.state.query);
  }

  private onChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ query: e.currentTarget.value });
  }

  private submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(this.state.query);
  }

  public render() {
    return (
      <form className={styles.search} onSubmit={this.submit}>
        <input
          className={styles.input}
          type="text"
          value={this.state.query}
          onChange={this.onChange}
          data-testid="search-input"
        />
        <input className={styles.button} type="submit" value="Submit" />
      </form>
    );
  }
}

export default Search;
