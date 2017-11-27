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
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: 'LoginUserSuccess', payload: user });
      });
  };
};

