import React, { Component } from 'react';
import { Input, Label, Col, Row, Container, FormGroup, Button } from 'reactstrap';
import { fromJS } from 'immutable';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { isNil } from 'lodash/fp';
import Navig from '../Nav';

class Login extends Component {

  static propTypes = {
    loginUser: PropTypes.func.isRequired,
    verifyUser: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    userData: ImmutablePropTypes.map.isRequired,
  };

  static loginState = () => fromJS({
    email: '',
    password: '',
  });

  state = {
    loginState: Login.loginState(),
  }

  componentDidMount() {
    const { verifyUser } = this.props;
    verifyUser();
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

  unLogged = () => {
    console.log('In unLogged');
    console.log(this.props.userData.get('userStatus'));
    return isNil(this.props.userData.get('userStatus'));
  }

  executeLogin = () => {
    const { loginUser } = this.props;
    loginUser(this.state.loginState);
  }

  executeLogout = () => {
    const { logoutUser } = this.props;
    logoutUser();
  }

  render() {
    return this.unLogged() ? (
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
              <Button color="danger" onClick={this.executeLogout}>Salir</Button>{' '}
            </Col>
          </Row>
        </Container>
      </div>
    )

    ;
  }
}

export default Login;
