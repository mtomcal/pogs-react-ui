import superagent from 'superagent';
import jsonp from 'superagent-jsonp';

const BASE_URL = `http://cas-pogs.uoregon.edu/dev/api`;

const SEARCH_ENDPOINT = `${BASE_URL}/search.jsonp`;

export const Search = {
  searchInProgress() {
    return {
      type: 'SEARCH_IN_PROGRESS'
    };
  },
  searchDone(results) {
    return {
      type: 'SEARCH_DONE',
      payload: results
    };
  },
  searchFail(error) {
    return {
      type: 'SEARCH_FAIL',
      payload: error
    };
  },
  searchQuery(term) {
    return function searchQueryThunk(dispatch) {
      dispatch(Search.searchInProgress());
      // Ajax Query here
      superagent.get(SEARCH_ENDPOINT)
        .query({
          alt: 'json',
          domain: term,
          gene: '',
          pogMethod: 'groups',
          nucop: '',
          page: 1,
          pog: '',
          ppdb: '',
          targetop: '',
          tid: '',
          type: 'byPOG'
        })
        .use(jsonp)
        .end(function (error, results) {
          if (error) {
            return dispatch(Search.searchFail(error));
          }
          return dispatch(Search.searchDone(results.body));
        });
    };
  }
};