import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Nav from '../Nav';
import {
  verifyUser,
  logoutUser,
} from '../../actions';

// Se mapea el estado del reducer jobReducer
const mapStateToProps = (state) => ({
  userData: state.userData,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    verifyUser,
    logoutUser,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
