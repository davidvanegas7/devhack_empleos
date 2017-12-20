import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { IconButton } from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';
import Input from 'react-toolbox/lib/input';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';


class Job extends Component {
  static propTypes = {
    job: ImmutablePropTypes.map.isRequired,
    viewJob: PropTypes.func.isRequired,
  }

  state = {
    hideComments: true,
    buttonIcon: 'visibility',
  }

  render() {
    const { job, id, viewJob } = this.props;

    return (
      <div>
        <Card className="text-center" style={{ width: '700px', height: 'auto' }}>
          <CardTitle
            title={job.get('keywords')}
            subtitle={job.get('ciudad')}
          />
          <CardText>{job.get('descripcion')}</CardText>
          <CardActions>
            <IconButton icon="face" onClick={() => viewJob(id, job)} />
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default Job;

// {job.get('empresa')}
// {job.get('ciudad')}
// {job.get('modalidad')}
// {job.get('telefono')}
// {job.get('email')}
// {job.get('keywords')}
// {job.get('descripcion')}
