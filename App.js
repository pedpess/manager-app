import React from 'react';
import {} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends React.Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBhaIyYf7lm32k0C5GH3sNgJ64pPQ0o4fQ',
      authDomain: 'manager-app-ba47e.firebaseapp.com',
      databaseURL: 'https://manager-app-ba47e.firebaseio.com',
      projectId: 'manager-app-ba47e',
      storageBucket: '',
      messagingSenderId: '88950789435'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
