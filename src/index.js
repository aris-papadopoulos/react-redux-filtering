import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import allReducers from './reducers'

const store = createStore(allReducers);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
