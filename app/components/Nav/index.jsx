import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { fromJS } from 'immutable';
import { isNil } from 'lodash/fp';
import Message from '../Message/Message';

// import 'bootstrap/dist/css/bootstrap.css';

import imageLogoDevhack from '../../../assets/img/logo.png';

class Navig extends Component {

  static propTypes = {
    verifyUser: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    userData: ImmutablePropTypes.map.isRequired,
  };

  static loginState = () => fromJS({
    email: '',
    password: '',
  });

  state = {
    loginState: Navig.loginState(),
    message: '',
  }

  componentDidMount() {
    const { verifyUser } = this.props;
    verifyUser();
  }

  unLogged = () => {
    const status = this.props.userData.get('userStatus');
    return isNil(status);
  }

  executeLogout = () => {
    const { logoutUser } = this.props;
    logoutUser();
    this.setState({ message: 'Has cerrado session exitosamente' });
    setTimeout(() => { this.setState({ message: '' }); }, 5000);
  }

  render() {
    return this.unLogged() ? (
      <div>
        <ul>
          <li><img src={imageLogoDevhack} alt="logo" /></li>
          <li className="dere"><a href="/login" className="btn btn-md btn-danger btn-right" >Login</a></li>
          <li className="dere"><h4><a href="/" className="btn btn-md btn-link btn-right">Comunidad</a></h4></li>
        </ul>
        <div style={{ height: '50px' }} />
        <Message
          text={this.state.message}
        />
      </div>
    ) : (
      <div>
        <ul>
          <li><img src={imageLogoDevhack} alt="logo" /></li>
          <li className="dere"><button onClick={this.executeLogout} className="btn btn-md btn-danger btn-right" >Logout</button></li>
          <li className="dere"><h4><a href="/" className="btn btn-md btn-link btn-right">Comunidad</a></h4></li>
        </ul>
        <div style={{ height: '50px' }} />
        <Message
          text={this.state.message}
        />
      </div>
    );
  }
}

export default Navig;
