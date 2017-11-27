import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, Input, Button, } from './common';
import { emailChanged, passwordChanged } from '../actions';


class LoginForm extends Component {

  handleEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  handlePasswordChange = (text) => {
    this.props.passwordChanged(text);
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
          <Button>
            Login
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  };
};


export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
