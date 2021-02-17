import { combineReducers } from 'redux';
import weapons from './weapons';
import materials from './materials';

const allReducers = combineReducers({
  weapons,
  materials
})

export default allReducers;