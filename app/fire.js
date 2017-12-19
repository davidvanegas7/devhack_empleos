import firebase from 'firebase';
import { firebaseConfig } from './constants';
/*
const config = {
  apiKey: 'AIzaSyBzTmfOo2q3zEfh7krPEorQZA-9rDP6sCo',
  authDomain: 'devhack-55d18.firebaseapp.com',
  databaseURL: 'https://devhack-55d18.firebaseio.com',
  storageBucket: 'devhack-55d18.appspot.com',
};
*/
const config = firebaseConfig;

const fire = firebase.initializeApp(config);

export default fire;
