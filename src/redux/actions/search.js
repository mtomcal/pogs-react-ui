import { static as Immutable } from 'seamless-immutable';
import _ from 'lodash';
import superagent from 'superagent';
import jsonp from 'superagent-jsonp';
import * as Config from '../../config/default';
import { normalizeSearch } from '../schema/search';

export const searchInProgress = () => {
  return {
    type: 'SEARCH_IN_PROGRESS',
  };
};

export const searchDone = results => {
  return {
    type: 'SEARCH_DONE',
    payload: Immutable.from(normalizeSearch(results)),
  };
};

export const searchFail = error => {
  return {
    type: 'SEARCH_FAIL',
    payload: error,
  };
};

export const searchQuery = ({ keyword, gene, pog }) => {
  return function searchQueryThunk(dispatch) {
    dispatch(searchInProgress());
    // Ajax Query here
    superagent
      .get(Config.SEARCH_ENDPOINT)
      .query({
        alt: 'json',
        domain: keyword || '',
        gene: gene || '',
        pogMethod: 'groups',
        nucop: '',
        page: 1,
        pog: pog || '',
        ppdb: '',
        targetop: '',
        tid: '',
        type: 'byPOG',
      })
      .use(jsonp)
      .end(function(error, results) {
        if (error) {
          if (error.message === '404 NotFound') {
            // Drop this error as it seems superagent-jsonp has a bug
            return;
          }
          return dispatch(searchFail(error.message));
        }
        return dispatch(searchDone(results.body));
      });
  };
};
