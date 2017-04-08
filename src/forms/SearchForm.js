import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import RenderField from './RenderField';
import validator from 'validator';
import _ from 'lodash';

function validate(values) {
  let errors = {};
  const keysOfInterest = _.keys(values)
      .filter((key) => !_.isEmpty(values[key]));

  keysOfInterest.forEach((key) => {
      if (key === 'gene' && !validator.isAlphanumeric(values[key])) {
          errors.gene = 'Gene Id should be alphanumeric';
      }
      if (key === 'keyword' && !validator.isAlphanumeric(values[key])) {
          errors.keyword = 'Keyword should be alphanumeric';
      }
      if (key === 'pog' && !validator.isInt(_.get(values, 'pog', ''))) {
          errors.pog = 'POG Id should be an integer';
      }
  });
  return errors;
}

function SearchForm({submitting, handleSubmit}) {
  return (
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-12">
            <Field label="Search By Gene ID e.g. GRMZM2G055768" name="gene" type="text" component={RenderField} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Field label="Search By Keyword e.g. 'ppr' or by InterproID e.g. IPR001117" name="keyword" type="text" component={RenderField} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Field label="Search By POG ID i.e. 5562" name="pog" type="text" component={RenderField} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button className="btn btn-primary btn-raised" type="submit" disabled={submitting}>Submit</button>
          </div>
        </div>
      </form>
  );
}

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
  reset: PropTypes.func
};

export default reduxForm({
  form: 'search',
  validate
})(SearchForm);
