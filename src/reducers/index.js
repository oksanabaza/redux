import counterReducer from './counter';
import loggedReducer from './idLogger';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
  counter: counterReducer,
  idLogged: loggedReducer
});
export default allReducer;