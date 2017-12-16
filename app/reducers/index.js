import { combineReducers } from 'redux';
import jobsData from './jobsReducer';
import { authReducer } from '../auth/reducer';
// Combina los reducers
const appReducer = combineReducers({
  jobsData,
  authReducer,
});

export default appReducer;
