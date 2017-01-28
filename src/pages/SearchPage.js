import React, {
  Component,
  PropTypes,
} from 'react';
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
    console.log(values);
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
              <div className="col s12">
                <h3>Search for POGs</h3>
                <p>Search for Putative Orthologous Groups (POGs) containing genes in Arabidopsis thaliana,
                  Zea mays, Oryza sativa, and/or Populus trichocarpa that meet the following criteria:</p>
              </div>
            </div>
            <SearchForm onSubmit={this.onSearch}/>
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
      dispatch(Search.searchQuery(values.gene));
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchPage);
