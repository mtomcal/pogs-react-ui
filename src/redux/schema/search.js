// import _ from 'lodash';
import { normalize, schema } from 'normalizr';

// Schema
const pog = new schema.Entity(
  'pogs',
  {},
  {
    idAttribute: (value, parent, key) => value[0],
  },
);

const result = {
  results: [pog],
};

export const normalizeSearch = data => normalize(data, result);
