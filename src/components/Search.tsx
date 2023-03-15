import React from 'react';
import { ISearchState } from 'types/interfaces';

class Search extends React.Component<Record<string, never>, ISearchState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      query: '',
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.setLSQuery = this.setLSQuery.bind(this);
    this.getLSQuery = this.getLSQuery.bind(this);
  }

  public componentDidMount(): void {
    this.getLSQuery();
  }

  public componentWillUnmount(): void {
    this.setLSQuery();
  }

  private getLSQuery(): void {
    const query = localStorage.getItem('query');
    console.log(query);
    query ? this.setState({ query }) : this.setState({ query: '' });
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
      <form className="search" onSubmit={this.submit}>
        <input type="text" onChange={this.onChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Search;
