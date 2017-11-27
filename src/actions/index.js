import firebase from 'firebase';

export const emailChanged = (text) => {
  return {
    type: 'EmailChanged',
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: 'PasswordChanged',
    payload: text,
  };
};

export const loginUser = ({ email, password }) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => console.log(user));
};

