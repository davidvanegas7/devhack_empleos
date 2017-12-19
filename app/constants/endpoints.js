const url = 'http://localhost:3000';

const endpoints = {
  posts: `${url}/posts`,
  post: `${url}/post/`,
};

export const route = 'works';

/*
export const firebaseConfig = {
  apiKey: 'AIzaSyBzTmfOo2q3zEfh7krPEorQZA-9rDP6sCo',
  authDomain: 'devhack-55d18.firebaseapp.com',
  databaseURL: 'https://devhack-55d18.firebaseio.com',
  storageBucket: 'devhack-55d18.appspot.com',
};
*/

export const firebaseConfig = {
  apiKey: 'AIzaSyDfi0rFpj2z_IVIk4ZPn5WM0HF7JmInviw',
  authDomain: 'ascodevida-51dc0.firebaseapp.com',
  databaseURL: 'https://ascodevida-51dc0.firebaseio.com',
  projectId: 'ascodevida-51dc0',
  storageBucket: 'ascodevida-51dc0.appspot.com',
  messagingSenderId: '1017450578124',
};

export default endpoints;
