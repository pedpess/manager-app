import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, Input, Button, } from './common';
import { emailChanged } from '../actions';


class LoginForm extends Component {

  handleEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Input
            label='Email'
            placeholder='user@email.com'
            onChangeText={this.handleEmailChange}
          />
        </CardItem>

        <CardItem>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
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


export default connect(null, { emailChanged })(LoginForm);
