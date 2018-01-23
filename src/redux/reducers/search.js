import _ from 'lodash';
import produce from 'immer';
import { status } from '../../config/default';

export const Search = (state = { status: status.EMPTY }, action) =>
  produce(state, nextState => {
    switch (action.type) {
    case 'SEARCH_IN_PROGRESS':
      nextState.status = status.IN_PROGRESS;
      break;
    case 'SEARCH_DONE':
      nextState.status = status.DONE;
      _.merge(nextState, action.payload);
      break;
    case 'SEARCH_FAIL':
      nextState.status = status.FAIL;
      nextState.error = action.payload;
      nextState.result = [];
      break;
    default:
      break;
    }
  });
