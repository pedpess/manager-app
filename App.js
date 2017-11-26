import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';


export default class App extends React.Component {

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyBhaIyYf7lm32k0C5GH3sNgJ64pPQ0o4fQ",
      authDomain: "manager-app-ba47e.firebaseapp.com",
      databaseURL: "https://manager-app-ba47e.firebaseio.com",
      projectId: "manager-app-ba47e",
      storageBucket: "",
      messagingSenderId: "88950789435"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
