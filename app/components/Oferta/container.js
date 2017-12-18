import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Oferta from './Oferta';
import {
  createJob,
  editJob,
} from '../../actions';

// Se mapea el estado del reducer jobReducer
const mapStateToProps = (state) => ({
  jobsData: state.jobsData,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    createJob,
    editJob,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Oferta);
