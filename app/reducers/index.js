import { combineReducers } from 'redux';
import jobsData from './jobsReducer';
// Combina los reducers
const appReducer = combineReducers({
  jobsData,
});

export default appReducer;
