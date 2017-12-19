import React, { Component } from 'react';
import { Input, Label, Col, Row, Container, FormGroup, Button } from 'reactstrap';
import { fromJS } from 'immutable';

import fire from '../../fire';
import Navig from '../Nav';

class Login extends Component {

  static loginState = () => fromJS({
    email: '',
    password: '',
  });

  state = {
    loginState: Login.loginState(),
  }

  componentDidMount() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        // ...
      } else {
        // User is signed out.
        console.log('no user');
        // ...
      }
    });
  }

  handleChangex = (evt, key) => {
    const value = evt.target.value;
    console.log(`${key}: ${value}`);
    const loginState = this.state.loginState.set(key, value);
    this.setState({ loginState });
  };

  handleChangeEmail = (evt) => {
    this.handleChangex(evt, 'email');
  }

  handleChangePassword = (evt) => {
    this.handleChangex(evt, 'password');
  }

  logged = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        return true;
      }
      console.log('no user');
      return false;
    });
  }

  executeLogin = () => {
    const email = this.state.loginState.get('email');
    const password = this.state.loginState.get('password');
    fire.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`errorcode: ${errorCode}`);
      console.log(`errorMessage: ${errorMessage}`);
      // ...
    });
  }

  render() {
    return !this.logged ? (
      <div>
        <Navig />
        <Container style={{ padding: '2rem' }}>
          <Row>
            <Col sm={{ size: 12 }}>
              <h1>Login</h1>
            </Col>
          </Row>
          <Row className="spc">
            <Col xs="6" sm="6">
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="idEmail"
                  placeholder="Ingresa tu email"
                  value={this.state.loginState.get('email')}
                  onChange={this.handleChangeEmail}
                />
              </FormGroup>
            </Col>
            <Col xs="6" sm="6">
              <FormGroup>
                <Label for="exampleEmail">Contraseña</Label>
                <Input
                  type="password"
                  name="password"
                  id="idPassword"
                  placeholder="Ingresa tu password"
                  value={this.state.loginState.get('password')}
                  onChange={this.handleChangePassword}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className="spc">
            <Col sm="12" md={{ size: 7 }}>
              <Button color="danger" onClick={this.executeLogin}>Ingresar</Button>{' '}
            </Col>
          </Row>
        </Container>
      </div>
    ) : (
      <div>
        <Navig />
        <Container style={{ padding: '2rem' }}>
          <Row>
            <Col sm={{ size: 12 }}>
              <h1>Login</h1>
            </Col>
          </Row>
          <Row className="spc">
            <Col xs="12" sm="12">
              <h3>Actualmente estas logueado en el sistemas</h3>
            </Col>
          </Row>
        </Container>
      </div>
    )

    ;
  }
}

export default Login;
