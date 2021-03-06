import React, { Component } from 'react';
import Card from '../Shared/Card';
import SearchForm from './SearchForm';
import Layout from '../Shared/Layout';
import { Redirect } from 'react-router';
import qs from 'qs';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { shouldRedirect: false };
    this.searchValues = {};
  }
  onSearch = values => {
    this.searchValues = qs.stringify(values);
    this.setState({ shouldRedirect: true });
  };
  render() {
    if (this.state.shouldRedirect === true) {
      return (
        <Redirect
          to={{ pathname: '/results', search: `${this.searchValues}` }}
        />
      );
    }
    return (
      <Layout>
        <Card>
          <div className="row">
            <div className="col-sm-12">
              <h3>Search for POGs</h3>
              <p>
                Search for Putative Orthologous Groups (POGs) containing genes
                in Arabidopsis thaliana, Zea mays, Oryza sativa, and/or Populus
                trichocarpa that meet the following criteria:
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <SearchForm onSubmit={this.onSearch} />
            </div>
          </div>
        </Card>
      </Layout>
    );
  }
}

SearchPage.propTypes = {};

export default SearchPage;
