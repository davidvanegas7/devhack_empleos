import fire from '../fire';
import { route } from '../constants';
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
    fire.database().ref(route).push(job);
    dispatch(toggleJobsLoading());
    dispatch(refreshJobs());
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
          ...childSnapshot.val(),
          key: childSnapshot.key,
          id: childSnapshot.key,
        });
      });
      dispatch(receiveJobs((items)));
      dispatch(toggleJobsLoading());
    });
  };
}
