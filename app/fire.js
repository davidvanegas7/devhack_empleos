import firebase from 'firebase';
/*
const config = {
  apiKey: 'AIzaSyBzTmfOo2q3zEfh7krPEorQZA-9rDP6sCo',
  authDomain: 'devhack-55d18.firebaseapp.com',
  databaseURL: 'https://devhack-55d18.firebaseio.com',
  storageBucket: 'devhack-55d18.appspot.com',
};
*/

const config = {
  apiKey: 'AIzaSyDfi0rFpj2z_IVIk4ZPn5WM0HF7JmInviw',
  authDomain: 'ascodevida-51dc0.firebaseapp.com',
  databaseURL: 'https://ascodevida-51dc0.firebaseio.com',
  projectId: 'ascodevida-51dc0',
  storageBucket: 'ascodevida-51dc0.appspot.com',
  messagingSenderId: '1017450578124',
};

const fire = firebase.initializeApp(config);
export default fire;
/*

const api = firebase.database().ref('/');


function itemRef(id) {
  return api.child(`item/${id}`);
}

function userRef(id) {
  return api.child(`user/${id}`);
}

function updatesRef() {
  return api.child('updates/items');
}

function fetchItem(id, cb) {
  itemRef(id).once('value', (snapshot) => {
    cb(snapshot.val());
  });
}

function fetchItems(ids, cb) {
  let items = [];
  function addItem(item) {
    items.push(item);
    if (items.length >= ids.length) {
      cb(items);
    }
  }
  ids.forEach((id) => {
    fetchItem(id, addItem);
  });
}

function storiesRef(path) {
  return api.child(path);
}


module.exports = {
  fetchItem,
  fetchItems,
  storiesRef,
  itemRef,
  userRef,
  updatesRef,
};
*/
