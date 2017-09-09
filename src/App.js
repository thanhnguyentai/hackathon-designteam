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
      <div className="page-wrapper">
        <Header/>
        <main>
          <div className="content-wrapper">
           {this.props.children}
          </div>
        </main>
        <Navigation/>
        <Configuration/>
      </div>
    );
  }
}

export default App;
