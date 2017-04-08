import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import SearchForm from '../forms/SearchForm';
import Layout from '../containers/Layout';
import {Search} from '../actions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.state = {shouldRedirect: false};
  }
  onSearch(values) {
    this.setState({shouldRedirect: true});
    this.props.searchAction(values);
  }
  render() {
    if (this.state.shouldRedirect === true) {
      return <Redirect to="/results" />;
    }
    return (
        <Layout>
          <Card>
            <div className="row">
              <div className="col-sm-12">
                <h3>Search for POGs</h3>
                <p>Search for Putative Orthologous Groups (POGs) containing genes in Arabidopsis thaliana,
                  Zea mays, Oryza sativa, and/or Populus trichocarpa that meet the following criteria:</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <SearchForm onSubmit={this.onSearch}/>
              </div>
            </div>
          </Card>
        </Layout>
    );
  }
}

SearchPage.propTypes = {
  searchAction: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    searchAction(values) {
      dispatch(Search.searchQuery(values));
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchPage);
