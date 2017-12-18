import assign from 'lodash/fp/assign';
import fire from '../fire';
import { route } from '../constants';

// import { JobList } from '../list/job-list';
// Acciones que envian su informacion al reducer

const receiveJobs = (jobs) => (
  {
    type: 'RECEIVE_JOBS',
    jobs,
  }
);

const refreshJobs = () => (
  {
    type: 'REFRESH_JOBS',
  }
);

const toggleJobsLoading = () => ({
  type: 'TOGGLE_JOBS_LOADING',
});

// Acciones que se exportan para ser usadas en las clases de React
export function createJob(job) {
  return (dispatch) => {
    dispatch(toggleJobsLoading());
    console.log('ENTRO AL JOBS ACtIONS');
    console.log(job);
    fire.database().ref(route).push(JSON.stringify(assign({}, job)));
    dispatch(toggleJobsLoading());
    dispatch(refreshJobs());
  };
}

export function editJob(job) {
  return (dispatch) => {
    dispatch(toggleJobsLoading());
    return fetch(`http://localhost:3000/jobs/${job._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(assign({}, job)),
    })
    .then(() => {
      dispatch(toggleJobsLoading());
      dispatch(refreshJobs());
    });
  };
}

export function deleteJob(id) {
  return (dispatch) => {
    dispatch(toggleJobsLoading());
    return fetch(`http://localhost:3000/jobs/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(() => {
      dispatch(toggleJobsLoading());
      dispatch(refreshJobs());
    });
  };
}

export function fetchJobs() {
  return (dispatch) => {
    dispatch(toggleJobsLoading());
    const items = [];
    const jobsRef = fire.database().ref(route);
    jobsRef.on('value', (snapshot) => {
      snapshot.forEach(childSnapshot => {
        items.push({
          empresa: childSnapshot.val(),
          cargo: 'cargo',
          tipo: 'tipo',
          ciudad: 'ciudad',
          fecha: 'fecha',
          descripcion: 'descripcion',
          email: 'email',
          celular: 'celular',
          key: childSnapshot.key,
          id: childSnapshot.key,
        });
      });
      dispatch(receiveJobs((items)));
      dispatch(toggleJobsLoading());
    });
  };
}
