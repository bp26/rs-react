import React from 'react';
import { Outlet } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Outlet />
      </div>
    );
  }
}

export default App;
