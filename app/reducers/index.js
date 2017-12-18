import { combineReducers } from 'redux';
// import { firebaseStateReducer } from 'react-redux-firebase';
import jobsData from './jobsReducer';

// Combina los reducers
const appReducer = combineReducers({
  jobsData,
//  firebase: firebaseStateReducer,
});

export default appReducer;
