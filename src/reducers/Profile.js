import {static as Immutable} from 'seamless-immutable';
import _ from 'lodash';

export const profileStatus = {
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
  FAIL: 'FAIL'
};

function profileResults(payload) {
  return _.keys(payload.locus)
    .map(function (locusId) {
      return _.get(payload, ['locus', locusId, 'organismdatum']);
    })
    .reduce(function (modelObj, genemodels) {
      return Immutable.merge(modelObj, genemodels);
    }, Immutable.from({}));
}

export default function Profile(state = Immutable.from({status: profileStatus.DONE}), action) {
  switch (action.type) {
    case 'PROFILE_IN_PROGRESS':
      return Immutable.merge(state, {
        status: profileStatus.IN_PROGRESS
      });
    case 'PROFILE_DONE':
      return Immutable.merge(state, {
        status: profileStatus.DONE,
        currentProfileId: action.currentProfileId,
        results: Immutable.from(profileResults(action.payload))
      });
    case 'PROFILE_FAIL':
      return Immutable.merge(state, {
        status: profileStatus.FAIL,
        error: Immutable.from(action.error),
        results: Immutable.from({})
      });
    default:
      return state;
  }
}

