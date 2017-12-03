import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DestinationsList from './DestinationsList';
import FilterList from './FilterList';

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

const filters = [{
  type: 'location-type',
  name: 'island'
}, {
  type: 'location-type',
  name: 'city'
}, {
  type: 'location-type',
  name: 'village'
}, {
  type: 'sport',
  name: 'tennis'
}, {
  type: 'sport',
  name: 'golf'
}, {
  type: 'sport',
  name: 'wind-surfing'
}
]

let res = [];

filters.forEach( (el) => {
  if (el.type==='sport') {
    res.push(el.name);
  }

})
console.log('res', res);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FilterList filters={filters} />
        <DestinationsList destinations={destinations} />
      </div>
    );
  }
}

export default App;
