import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from './Modal';
import {
  verifyUser,
} from '../../../actions';

// Se mapea el estado del reducer jobReducer
const mapStateToProps = (state) => ({
  userData: state.userData,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    verifyUser,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
