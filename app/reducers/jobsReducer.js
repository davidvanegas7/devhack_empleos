import { fromJS } from 'immutable';

import ACTION_TYPES from '../actions/actionTypes';

export const initialState = fromJS({
  jobs: [],
  totalResults: null,
  refresh: false,
  jobsLoading: false,
});

export default function postsData(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.RECEIVE_JOBS: {
      const totalResults = action.jobs.length;
      const jobs = fromJS(action.jobs);
      return state.withMutations(map => {
        map.set('jobs', jobs)
          .set('totalResults', totalResults)
          .set('refresh', false);
      });
    }
    case ACTION_TYPES.REFRESH_JOBS:
      return state.set('refresh', true);
    case ACTION_TYPES.TOGGLE_JOBS_LOADING:
      return state.set('jobsLoading', !state.get('jobsLoading'));
    case ACTION_TYPES.RESET_JOBS:
      return initialState;
    default:
      return state;
  }
}
