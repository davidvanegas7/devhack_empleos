import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { isNil } from 'lodash/fp';

export default function withLoggedFuncions(WrappedComponent) {
  class WrappedComponentWithLoggin extends Component {

    static propTypes = {
      loginUser: PropTypes.func.isRequired,
      verifyUser: PropTypes.func.isRequired,
      logoutUser: PropTypes.func.isRequired,
      userData: ImmutablePropTypes.map.isRequired,
    };

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
      return <WrappedComponent {...this.props} />;
    }

  }
  return connect()
}
