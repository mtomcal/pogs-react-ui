import _ from 'lodash';
import { createSelector } from 'reselect';

// Queries
export const getDomains = state => _.get(state, 'Domains.result', {});
export const getDomainsStatus = state => _.get(state, 'Domains.status');

export const getDomainCollection = createSelector([getDomains], domains =>
  _.map(domains, (domain, id) => ({
    id,
    domain,
  })),
);
