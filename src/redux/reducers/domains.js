import produce from 'immer';
// import _ from 'lodash';
import { status } from '../../config/default';

export const Domains = (state = { status: status.EMPTY }, action) =>
  produce(state, nextState => {
    switch (action.type) {
    case 'DOMAIN_IN_PROGRESS':
      nextState.status = status.IN_PROGRESS;
      break;
    case 'DOMAIN_DONE':
      nextState.status = status.DONE;
      nextState.result = action.payload;
      break;
    case 'DOMAIN_FAIL':
      nextState.status = status.FAIL;
      nextState.error = action.error;
      nextState.result = {};
      break;
    default:
    }
  });
