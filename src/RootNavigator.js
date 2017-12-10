import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: {
      headerTitle: 'Please login',
    },
  }
});

export default RootNavigator;
