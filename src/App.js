import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Configuration from './components/Configuration';

import localData from './utils/LocalStorage';

class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      isShowConfig: false,
      filterData: localData.getFilterData()
    };
  }
  componentDidMount() {
  }

  toggleConfiguration() {
    this.setState({
      isShowConfig: !this.state.isShowConfig
    });
  }

  updateFilterConfig(newFilter) {
  }

  render() {
    return (
      <div className="page-wrapper">
        <Header showConfiguration={this.toggleConfiguration.bind(this)}/>
        <main>
          <div className="content-wrapper">
           {this.props.children}
          </div>
        </main>
        <Navigation/>
        <Configuration updateFilterConfig={this.updateFilterConfig.bind(this)} filterData={this.state.filterData} isShow={this.state.isShowConfig} hideConfiguration={this.toggleConfiguration.bind(this)}/>
      </div>
    );
  }
}

export default App;
