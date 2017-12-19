import { combineReducers } from 'redux';
// import { firebaseStateReducer } from 'react-redux-firebase';
import jobsData from './jobsReducer';
import userData from './userReducer';

// Combina los reducers
const appReducer = combineReducers({
  jobsData,
  userData,
//  firebase: firebaseStateReducer,
});

export default appReducer;
