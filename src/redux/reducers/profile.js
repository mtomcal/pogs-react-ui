import { static as Immutable } from 'seamless-immutable';
import _ from 'lodash';
import { status } from '../../config/default';

export function Profile(
  state = Immutable.from({ status: status.DONE }),
  action,
) {
  switch (action.type) {
  case 'PROFILE_IN_PROGRESS':
    return Immutable.merge(state, {
      status: status.IN_PROGRESS,
    });
  case 'PROFILE_DONE':
    return Immutable.merge(state, {
      status: status.DONE,
      ...action.payload,
    });
  case 'PROFILE_FAIL':
    return Immutable.merge(state, {
      status: status.FAIL,
      error: Immutable.from(action.error),
      results: Immutable.from({}),
    });
  default:
    return state;
  }
}
