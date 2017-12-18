import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Jobs from './Jobs';
import {
  fetchJobs,
  createJob,
  editJob,
  deleteJob,
} from '../../actions';

// Se mapea el estado del reducer jobReducer
const mapStateToProps = (state) => ({
  jobsData: state.jobsData,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchJobs,
    createJob,
    editJob,
    deleteJob,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
