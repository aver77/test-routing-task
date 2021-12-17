import { createStore } from "redux";
import { combineReducers } from "redux";
import routingReducer from './reducers/routingReducer';

const store = createStore(combineReducers({routingReducer, }));
export default store;