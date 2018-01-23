import produce from 'immer';
import _ from 'lodash';
import { status } from '../../config/default';

export const Profile = (state = { status: status.EMPTY }, action) =>
  produce(state, nextState => {
    switch (action.type) {
    case 'PROFILE_IN_PROGRESS':
      nextState.status = status.IN_PROGRESS;
      break;
    case 'PROFILE_DONE':
      nextState.status = status.DONE;
      _.merge(nextState, action.payload);
      break;
    case 'PROFILE_FAIL':
      nextState.status = status.FAIL;
      nextState.error = action.error;
      nextState.result = {};
      break;
    default:
      break;
    }
  });
