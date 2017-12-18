import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Link from 'react-toolbox/lib/link';
// import 'bootstrap/dist/css/bootstrap.css';
import Job from './Job/Job';

import imageLogoDevhack from '../../../assets/img/logo.png';

class Jobs extends Component {

  static propTypes = {
    fetchJobs: PropTypes.func.isRequired,
    jobsData: ImmutablePropTypes.map.isRequired,
  };

  componentDidMount() {
    const { fetchJobs } = this.props;
    fetchJobs();
  }

  componentWillReceiveProps(nextProps) {
    const { fetchJobs } = this.props;
    const { jobsData } = nextProps;
    console.log(jobsData.get('postsLoading'), jobsData.get('refresh'));
    if (!jobsData.get('postsLoading') && jobsData.get('refresh')) {
      console.log('¡Entró!');
      fetchJobs();
    }
  }

  render() {
    const jobs = this.props.jobsData.get('jobs');
    console.log(jobs);
    const jobItems = jobs.map(job => (
      <Job
        key={job.get('id')}
        id={job.get('id')}
        job={job}
      />
    )).toJS();
    return (
      <div>
        <img src={imageLogoDevhack} alt="logo" />
        <h3>
          This is the DEVHACK HOME PAGE
        </h3>
        {jobItems}
        <Button color="primary">primary</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Link href="/" label="Home" />
      </div>
    );
  }


}
export default Jobs;
