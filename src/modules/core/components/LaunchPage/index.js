import React, { Component } from 'react';
import { Link } from 'react-router';

class LaunchPage extends Component {
  render() {
    return (
      <div>
        <h1>Launch Page</h1>
        <Link to="/app">Go to App</Link>
      </div>
    );
  }
}

export default LaunchPage;
