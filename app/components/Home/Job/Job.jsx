import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { IconButton } from 'react-toolbox/lib/button';
import ImmutablePropTypes from 'react-immutable-proptypes';


class Job extends Component {
  static propTypes = {
    job: ImmutablePropTypes.map.isRequired,
  }
  state = {
    buttonIcon: 'visibility',
  }

  render() {
    const { job } = this.props;
    return (
      <div>
        <Card className="text-center" style={{ width: '700px', height: 'auto' }}>
          <CardTitle
            title={job.get('keywords')}
            subtitle={job.get('ciudad')}
          />
          <CardText>{job.get('descripcion')}</CardText>
          <CardActions>
            <IconButton icon="face" />
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
