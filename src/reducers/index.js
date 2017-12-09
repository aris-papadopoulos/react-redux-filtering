import {combineReducers} from 'redux';
import destinationReducer from './reducer-destinations';

const allReducers = combineReducers({
    destinations : destinationReducer
});

export default allReducers;