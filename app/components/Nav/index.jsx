import React, { Component } from 'react';
import { NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { fromJS } from 'immutable';
import { isNil } from 'lodash/fp';

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
  }

  componentDidMount() {
    const { verifyUser } = this.props;
    verifyUser();
  }

  unLogged = () => {
    const status = this.props.userData.get('userStatus');
    return isNil(status);
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
    const styleDiv = (<style jsx>{`
      ul {
          list-style-type: none;
          margin: 15px;
          padding: 10px;
          overflow: hidden;
          background-color: #fff;
      }

      li {
          float: left;
          margin: 0 10px;
      }

      li a {
          display: block;
          color: black;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
      }

      li img {
          margin: -20px 0;
      }

      /* Change the link color to #111 (black) on hover */
      li a:hover {
          background-color: #fff;
      }
      .dere {
        float:right
      }
    `}
    </style>);

    return this.unLogged() ? (
      <div>
        {styleDiv}
        <ul>
          <li><img src={imageLogoDevhack} alt="logo" /></li>
          <li className="dere"><a href="/login" className="btn btn-md btn-danger btn-right" >Login</a></li>
          <li className="dere"><h4><a href="/" className="btn btn-md btn-link btn-right">Comunidad</a></h4></li>
        </ul>
      </div>
    ) : (
      <div>
        {styleDiv}
        <ul>
          <li><img src={imageLogoDevhack} alt="logo" /></li>
          <li className="dere"><button onClick={this.executeLogout} className="btn btn-md btn-danger btn-right" >Logout</button></li>
          <li className="dere"><h4><a href="/" className="btn btn-md btn-link btn-right">Comunidad</a></h4></li>
        </ul>
      </div>
    );
  }
}

export default Navig;
