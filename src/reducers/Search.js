import _ from 'lodash';

export const searchStatus = {
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
  FAIL: 'FAIL'
};

export default function Search(state = {status: searchStatus.DONE}, action) {
  switch (action.type) {
    case 'SEARCH_IN_PROGRESS':
      return Object.assign({}, state, {
        status: searchStatus.IN_PROGRESS
      });
    case 'SEARCH_DONE':
      return Object.assign({}, state, {
        status: searchStatus.DONE,
        count: action.payload.count,
        results: _.keys(action.payload.results) // Retrieve keys
          .map(function mapKeys(key) { // Map Keys to Array<Object>
            const record = action.payload.results[key];
            return {id: record[0], description: record[1]};
          })
      });
    case 'SEARCH_FAIL':
      return Object.assign({}, state, {
        status: searchStatus.FAIL,
        error: action.payload,
        results: []
      });
    default:
      return state;
  }
}
