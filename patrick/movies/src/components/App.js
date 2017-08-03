import React, { Component } from 'react';
// ART & STYLING
import logo from '../art/logo.svg';
import routerMagic from '../art/routing.png';
import '../css/App.css';

import MoviesList from '../containers/MoviesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Lambda School: React-Routing</h2>
          <img src={routerMagic} alt='Friends'></img>
        </div>
        <p className="App-intro">
          Something <code>AMAZING</code> will go here!
        </p>
        <MoviesList />
      </div>
    );
  }
}

export default App;
