import React from 'react';
import Search from './Search';

class Main extends React.Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  public render() {
    return (
      <div className="main">
        <Search />
      </div>
    );
  }
}

export default Main;
