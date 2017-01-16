import React, {
  Component,
  PropTypes,
} from 'react';
import Card from '../components/Card';
import Layout from '../containers/Layout';

class ResultsPage extends Component {
  render() {
    return (
      <Layout>
        <Card>
          <div className="row">
            <div className="col s12">
              <h3>Results</h3>
            </div>
          </div>
        </Card>
      </Layout>
    );
  }
}

ResultsPage.propTypes = {};
ResultsPage.defaultProps = {};

export default ResultsPage;

