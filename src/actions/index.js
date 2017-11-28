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
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(error => loginUserFail(dispatch, error));
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: 'LoginUserSuccess',
    payload: user,
  });
};

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: 'LoginUserFail',
    payload: error
  });
};
