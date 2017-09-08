import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Configuration from './components/Configuration';

class App extends Component {
  componentDidMount() {
    this.props.history.pushState(null, '/home');
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Navigation/>
        <Configuration/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
