import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DestinationsList from './DestinationsList';
import FilterList from './FilterList';


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

let sport = [];
let locationType = [];

filters.forEach( (el) => {
  if (el.type==='sport') {
    sport.push(el.name);
  }
  else if (el.type==='location-type') {
    locationType.push(el.name);
  }

})
console.log('sport', sport);
console.log('locationType', locationType);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <form className="filters">
            <FilterList filters={sport} name="Sport" />
            <FilterList filters={locationType} name="Location Type" />
          </form>
          <DestinationsList  />
        </main>
      </div>
    );
  }
}

export default App;
