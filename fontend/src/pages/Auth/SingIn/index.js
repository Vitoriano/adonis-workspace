import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../../store/ducks/auth';

import { Container, SignForm } from '../styles';
import Button from '~/styles/components/Button';

class SingIn extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  static propTypes = {
    signInRequest: PropTypes.func,
  }

  state = {
    email: '',
    password: '',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    console.log('oi');
    e.preventDefault();
    console.log(e);
    const { email, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(email, password);
  }

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <SignForm onSubmit={this.handleSubmit}>
          <h1>Boas vindas</h1>

          <span>E-MAIL</span>
          <input type="email" name="email" value={email} onChange={this.handleInputChange} />

          <span>SENHA</span>
          <input type="password" name="password" value={password} onChange={this.handleInputChange} />
          {/* <button>Add Login</button> */}
          <Button type="submit" size="big">Entrar</Button>
        </SignForm>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SingIn);
