import _ from 'lodash';
// import { createSelector } from 'reselect';

// Queries
export const getGenemodelEntities = state =>
  _.values(_.get(state, 'Profile.entities.genemodels', {}));
export const getLocusStatus = state => _.get(state, 'Profile.status');
