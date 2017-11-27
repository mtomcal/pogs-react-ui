import _ from 'lodash';
import { normalize, schema } from 'normalizr';

// Schema
const genemodel = new schema.Entity(
  'genemodels',
  {},
  {
    idAttribute: (value, parent, key) => value.genemodel,
  },
);

const locus = new schema.Entity(
  'locus',
  {
    organismdatum: new schema.Values(genemodel),
  },
  {
    idAttribute: (value, parent, key) => value.pog_id,
  },
);

const result = {
  locus: new schema.Values(locus),
};

export const normalizeProfile = data => normalize(data, result);
