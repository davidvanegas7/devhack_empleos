import fire from '../fire';

// import { JobList } from '../list/job-list';
// Acciones que envian su informacion al reducer

const receiveUser = (user) => (
  {
    type: 'RECEIVE_USER',
    user,
  }
);

const cleanUser = () => (
  {
    type: 'CLEAN_USER',
  }
);

// Acciones que se exportan para ser usadas en las clases de React
export function loginUser(loginState) {
  const email = loginState.get('email');
  const password = loginState.get('password');
  fire.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`errorcode: ${errorCode}`);
    console.log(`errorMessage: ${errorMessage}`);
    // ...
  });
}

export function verifyUser() {
  return (dispatch) => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('In VERIFY USER');
        console.log(user);
        dispatch(receiveUser(user.email));
      } else {
        dispatch(cleanUser());
      }
    });
  };
}

export function logoutUser() {
  return (dispatch) => {
    fire.auth().signOut().then(() => {
      dispatch(cleanUser());
    }).catch((error) => {
      console.log('error: ');
      console.log(error);

      // An error happened.
    });
  };
}
