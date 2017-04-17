import superagent from 'superagent';
import jsonp from 'superagent-jsonp';
import {static as Immutable} from 'seamless-immutable';

const BASE_URL = `http://cas-pogs.uoregon.edu/dev/api`;

const SEARCH_ENDPOINT = `${BASE_URL}/search.jsonp`;
const POG_ENDPOINT = `${BASE_URL}/pog.jsonp`;
const PLAZA_ENDPOINT = `${BASE_URL}/plaza.jsonp`;

export const Search = {
  searchInProgress() {
    return {
      type: 'SEARCH_IN_PROGRESS'
    };
  },
  searchDone(results) {
    return {
      type: 'SEARCH_DONE',
      payload: Immutable.from(results)
    };
  },
  searchFail(error) {
    return {
      type: 'SEARCH_FAIL',
      payload: error
    };
  },
  searchQuery({keyword, gene, pog}) {
    return function searchQueryThunk(dispatch) {
      dispatch(Search.searchInProgress());
      // Ajax Query here
      superagent.get(SEARCH_ENDPOINT)
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
          type: 'byPOG'
        })
        .use(jsonp)
        .end(function (error, results) {
          if (error) {
            if (error.message === '404 NotFound') {
              // Drop this error as it seems superagent-jsonp has a bug
              return;
            }
            return dispatch(Search.searchFail(error.message));
          }
          return dispatch(Search.searchDone(results.body));
        });
    };
  }
};

export const Profile = {
  profileInProgress() {
    return {
      type: 'PROFILE_IN_PROGRESS'
    };
  },
  profileDone(results, id) {
    return {
      type: 'PROFILE_DONE',
      currentProfileId: id,
      payload: Immutable.from(results)
    };
  },
  profileFail(error) {
    return {
      type: 'PROFILE_FAIL',
      payload: error
    };
  },
  profileQuery({profileType, id}) {
    return function profileQueryThunk(dispatch) {
      dispatch(Profile.profileInProgress());
      let endpoint;

      switch (profileType) {
        case 'pog':
          endpoint = POG_ENDPOINT;
          break;
        case 'plaza':
          endpoint = PLAZA_ENDPOINT;
          break;
        default:
          endpoint = POG_ENDPOINT;
      }
      // Ajax Query here
      superagent.get(endpoint)
        .query({
          id
        })
        .use(jsonp)
        .end(function (error, results) {
          if (error) {
            if (error.message === '404 NotFound') {
              // Drop this error as it seems superagent-jsonp has a bug
              return;
            }
            return dispatch(Profile.profileFail(error.message));
          }
          return dispatch(Profile.profileDone(results.body, id));
        });
    };
  }
};