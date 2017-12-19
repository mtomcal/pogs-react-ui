import { static as Immutable } from 'seamless-immutable';
// import _ from 'lodash';
import superagent from 'superagent';
import jsonp from 'superagent-jsonp';
import * as Config from '../../config/default';

export const domainInProgress = () => {
  return {
    type: 'DOMAIN_IN_PROGRESS',
  };
};
export const domainDone = results => {
  return {
    type: 'DOMAIN_DONE',
    payload: Immutable.from(results),
  };
};
export const domainFail = error => {
  return {
    type: 'DOMAIN_FAIL',
    payload: error,
  };
};
export const domainQuery = ({ domainType, id }) => {
  return function domainQueryThunk(dispatch) {
    dispatch(domainInProgress());

    // Ajax Query here
    superagent
      .get(Config.DOMAIN_ENDPOINT)
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
          return dispatch(domainFail(error.message));
        }
        return dispatch(domainDone(results.body));
      });
  };
};
