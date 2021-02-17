import { combineReducers } from 'redux';
import weapons from './weapons';

const allReducers = combineReducers({
  weapons,
})

export default allReducers;