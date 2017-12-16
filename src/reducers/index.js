import {combineReducers} from 'redux';
import destinations from './reducer-destinations';
import active_filters from './reducer-active-filters';

const allReducers = combineReducers({
    active_filters,
    destinations
});

export default allReducers;