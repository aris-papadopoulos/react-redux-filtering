import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DestinationsList from './DestinationsList';

const destinations = [{
        title: 'golf island',
        category: 'golf island'
      }, {
        title: 'ice-hockey city',
        category: 'ice-hockey city'
      }, {
        title: 'golf village',
        category: 'golf village'
      }, {
        title: 'island',
        category: 'island'
      }, {
        title: 'tennis island',
        category: 'tennis island'
      }, {
        title: 'tennis village',
        category: 'tennis village'
      }, {
        title: 'ice-hockey tennis island',
        category: 'ice-hockey tennis island'
      }, {
        title: 'golf city',
        category: 'golf city'
      }];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DestinationsList destinations={destinations} team="warriors"/>
      </div>
    );
  }
}

export default App;
