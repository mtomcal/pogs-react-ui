import React, {PropTypes, Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from './RenderField';
import _ from 'lodash';

function validate(values) {
  let errors = {};
  return errors;
}

function SearchForm({submitting, handleSubmit}) {
  return (
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <Field label="Search By Gene ID e.g. GRMZM2G055768" name="gene" type="text" component={RenderField} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <Field label="Search By Keyword e.g. 'ppr' or by InterproID e.g. IPR001117" name="keyword" type="text" component={RenderField} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <Field label="Search By POG ID i.e. 5562" name="pog" type="text" component={RenderField} />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <button className="btn btn-large" type="submit" disabled={submitting}>Submit</button>
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
