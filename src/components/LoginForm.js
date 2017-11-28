import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Input, Button, } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';


class LoginForm extends Component {

  handleEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  handlePasswordChange = (text) => {
    this.props.passwordChanged(text);
  }

  handleLogIn = () => {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorStyles}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Input
            label='Email'
            placeholder='user@email.com'
            onChangeText={this.handleEmailChange}
            value={this.props.email}
          />
        </CardItem>

        <CardItem>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            onChangeText={this.handlePasswordChange}
            value={this.props.password}
          />
        </CardItem>

        <CardItem>
          <Button onPress={this.handleLogIn}>
            Login
          </Button>
        </CardItem>

        {this.renderError()}
      </Card>
    );
  }
}

const styles = {
  errorStyles: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
  };
};


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
