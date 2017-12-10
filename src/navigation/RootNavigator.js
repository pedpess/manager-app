import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginForm from '../components/LoginForm';
import EmployeeList from '../components/EmployeeList';

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: {
      headerTitle: 'Please login'
    },
    Employees: {
      screen: EmployeeList,
      navigationOptions: {
        headerTitle: 'Employees',
      }
    }
  }
});

export default RootNavigator;
