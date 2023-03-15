import React from 'react';

class ErrorPage extends React.Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render() {
    return (
      <div className="error">
        <h1>Error</h1>
      </div>
    );
  }
}

export default ErrorPage;
