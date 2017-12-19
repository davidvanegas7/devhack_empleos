import { fromJS } from 'immutable';

import ACTION_TYPES from '../actions/actionTypes';

export const initialState = fromJS({
  userStatus: null,
});

export default function userData(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.RECEIVE_USER: {
      const user = fromJS(action.user);
      return state.set('userStatus', user);
    }
    case ACTION_TYPES.CLEAN_USER:
      return initialState;
    default:
      return state;
  }
}
