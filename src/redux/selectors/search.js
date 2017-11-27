import _ from 'lodash';
import { createSelector } from 'reselect';

// Queries
export const getPogIds = state => _.get(state, 'Search.result.results', []);
export const getPogEntities = state => _.get(state, 'Search.entities.pogs', {});
export const getPogStatus = state => _.get(state, 'Search.status');

export const getAllPogs = createSelector(
  [getPogIds, getPogEntities],
  (ids, entities) =>
    ids.map(id => ({
      id,
      description: entities[id][1],
    })),
);
