import React, {
  Component,
  PropTypes,
} from 'react';
import Card from '../components/Card';
import SearchForm from '../forms/SearchForm';
import Layout from '../containers/Layout';

class SearchPage extends Component {
  onSearch(values) {
    console.log(values);
  }
  render() {
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

SearchPage.propTypes = {};
SearchPage.defaultProps = {};

export default SearchPage;
