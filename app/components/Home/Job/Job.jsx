import React, { Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import style from './style';

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
      <div className={style.divjob}>
        <div>
          --------------------------
          <b>
            { job.get('empresa') }
          </b>
          { job.get('ciudad') }
          { job.get('titulo') }
          { job.get('fecha') }
          { job.get('modalidad') }
          { job.get('telefono') }
          { job.get('email') }
          { job.get('keywords') }
          { job.get('descripcion') }
          --------------------------
        </div>
      </div>
    );
  }
}
export default Job;
