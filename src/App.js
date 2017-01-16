import React, {Component} from 'react';
import Layout from './containers/Layout';
import Card from './components/Card';
import SearchForm from './forms/SearchForm';

class App extends Component {
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
          <SearchForm />
        </Card>
      </Layout>
    );
  }
}

export default App;
