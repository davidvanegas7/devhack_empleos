import firebase from 'firebase';
import { firebaseConfig } from './constants';

const config = firebaseConfig;
const fire = firebase.initializeApp(config);

export default fire;
