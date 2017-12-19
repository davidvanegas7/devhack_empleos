import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login';
import {
  loginUser,
  verifyUser,
  logoutUser,
} from '../../actions';

// Se mapea el estado del reducer jobReducer
const mapStateToProps = (state) => ({
  userData: state.userData,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    loginUser,
    verifyUser,
    logoutUser,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
