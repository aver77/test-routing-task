import { createStore } from 'redux';
import { combineReducers } from 'redux';
import routingReducer from './reducers/routingReducer';
//for possible expandation
const store = createStore(combineReducers({routingReducer, }));
export default store;