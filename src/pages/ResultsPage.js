import React, {
  Component,
  PropTypes,
} from 'react';
import Card from '../components/Card';
import Table from '../components/Table';
import Layout from '../containers/Layout';
import {connect} from 'react-redux';
import _ from 'lodash';

class ResultsPage extends Component {
  render() {
    const {data, count} = this.props;
    return (
      <Layout>
        <Card>
          <div className="row">
            <div className="col s12">
              {_.isArray(data) &&
              <div>
                <h3>{count} Results</h3>
                <hr/>
                <Table headers={['id', 'description']} data={data} />
              </div>
              }
              {!_.isArray(data) &&
              <h3>No Results Have Been Found</h3>
              }
            </div>
          </div>
        </Card>
      </Layout>
    );
  }
}

ResultsPage.propTypes = {};

function mapStateToProps(state) {
  console.log(state)
  let data;
  if (state.Search.results) {
    data = state.Search.results.map(function (row) {
      row.id = <h4>{row.id}</h4>;
      return row;
    });
  }
  return {
    data,
    count: state.Search.count
  };
}

export default connect(mapStateToProps)(ResultsPage);

