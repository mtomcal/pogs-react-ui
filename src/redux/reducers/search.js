import { static as Immutable } from 'seamless-immutable';
import _ from 'lodash';
import { status } from '../../config/default';

export function Search(
  state = Immutable.from({ status: status.EMPTY }),
  action,
) {
  switch (action.type) {
  case 'SEARCH_IN_PROGRESS':
    return Immutable.merge(state, {
      status: status.IN_PROGRESS,
    });
  case 'SEARCH_DONE':
    return Immutable.merge(state, {
      status: status.DONE,
      ...action.payload,
    });
  case 'SEARCH_FAIL':
    return Immutable.merge(state, {
      status: status.FAIL,
      error: Immutable.from(action.payload),
      result: Immutable.from([]),
    });
  default:
    return state;
  }
}
