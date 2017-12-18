import { createStore, applyMiddleware } from 'redux';
// applyMiddleware,
import thunk from 'redux-thunk';
// import { reactReduxFirebase } from 'react-redux-firebase';

import appReducer from '../reducers';
/*
const firebaseConfig = {
  apiKey: 'AIzaSyBzTmfOo2q3zEfh7krPEorQZA-9rDP6sCo',
  authDomain: 'devhack-55d18.firebaseapp.com',
  databaseURL: 'https://devhack-55d18.firebaseio.com',
  storageBucket: 'devhack-55d18.appspot.com',
};

const reduxFirebaseConfig = { userProfile: 'users' };


const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseConfig, reduxFirebaseConfig),
)(createStore);

const initialState = {};
*/
// utilizamos los reducers combinados aqui y exportamos el store que usaremos en App.jsx
// const store = createStoreWithFirebase(appReducer, initialState);
const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
