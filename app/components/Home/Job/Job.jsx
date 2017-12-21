import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { IconButton } from 'react-toolbox/lib/button';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';


class Job extends Component {
  static propTypes = {
    job: ImmutablePropTypes.map.isRequired,
    viewJob: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
  }

  state = {
    hideComments: true,
    buttonIcon: 'visibility',
  }

  render() {
    const { job, id, viewJob } = this.props;

    return (
      <div style={{ display: 'inline-flex' }} >
        <Card className="text-center" style={{ width: '350px', height: 'auto' }}>
          <CardTitle
            style={{ fontSize: '1rem' }}
            title={job.get('titulo')}
          />
          <CardText>
            <div style={{ fontSize: '1rem', color: 'grey' }}>
              {job.get('ciudad')}
            </div>
            <div style={{ fontSize: '0.9rem' }} >{
                job.get('descripcion').length >= 100 ?
                `${job.get('descripcion').substring(0, 100)}...` :
                job.get('descripcion').substring(0, 100)
              }
            </div>
          </CardText>
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
