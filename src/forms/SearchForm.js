import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import TextField from '../components/TextField';
import Yup from 'yup';

function SearchForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        gene: '',
        keyword: '',
        pog: '',
      }}
      validationSchema={() =>
        Yup.object().shape({
          gene: Yup.string(),
          keyword: Yup.string(),
          pog: Yup.string(),
        })
      }
      onSubmit={onSubmit}
      render={props => (
        <form onSubmit={props.handleSubmit}>
          <div className="row">
            <div className="col-sm-12">
              <Field
                label="Search By Gene ID e.g. GRMZM2G055768"
                name="gene"
                component={TextField}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Field
                label="Search By Keyword e.g. 'ppr' or by InterproID e.g. IPR001117"
                name="keyword"
                component={TextField}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Field
                label="Search By POG ID i.e. 5562"
                name="pog"
                component={TextField}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <button className="btn btn-primary btn-raised" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    />
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
