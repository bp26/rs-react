import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

class App extends React.Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Outlet />
      </div>
    );
  }
}

export default App;
