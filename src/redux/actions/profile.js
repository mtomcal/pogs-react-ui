import { static as Immutable } from 'seamless-immutable';
import _ from 'lodash';
import superagent from 'superagent';
import jsonp from 'superagent-jsonp';
import * as Config from '../../config/default';
import { normalizeProfile } from '../schema/profile';

export const profileInProgress = () => {
  return {
    type: 'PROFILE_IN_PROGRESS',
  };
};
export const profileDone = results => {
  return {
    type: 'PROFILE_DONE',
    payload: Immutable.from(normalizeProfile(results)),
  };
};
export const profileFail = error => {
  return {
    type: 'PROFILE_FAIL',
    payload: error,
  };
};
export const profileQuery = ({ profileType, id }) => {
  return function profileQueryThunk(dispatch) {
    dispatch(profileInProgress());
    let endpoint;

    switch (profileType) {
    case 'pog':
      endpoint = Config.POG_ENDPOINT;
      break;
    case 'plaza':
      endpoint = Config.PLAZA_ENDPOINT;
      break;
    default:
      endpoint = Config.POG_ENDPOINT;
    }
    // Ajax Query here
    superagent
      .get(endpoint)
      .query({
        id,
      })
      .use(jsonp)
      .end(function(error, results) {
        if (error) {
          if (error.message === '404 NotFound') {
            // Drop this error as it seems superagent-jsonp has a bug
            return;
          }
          return dispatch(profileFail(error.message));
        }
        return dispatch(profileDone(results.body));
      });
  };
};
