import React, {PropTypes, Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from './RenderField';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let styles = {};

    return (
      <div>
        <form>
          <div className="row">
            <div className="input-field col s12">
              <Field label="Search By Gene ID e.g. GRMZM2G055768" name="gene" type="text" component={RenderField} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
};

export default reduxForm({
  form: 'search'
})(SearchForm);
