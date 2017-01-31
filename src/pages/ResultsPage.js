import React, {
  Component,
  PropTypes,
} from 'react';
import Card from '../components/Card';
import Table from '../components/Table';
import Loader from '../components/Loader';
import Layout from '../containers/Layout';
import {connect} from 'react-redux';
import _ from 'lodash';

export function trimResults(_data) {
  const data = _.cloneDeep(_data);
  return data.map(function (row) {
    row.description = _.truncate(row.description, {length: 140});
    return row;
  });
}

class ResultsPage extends Component {
  render() {
    const {data, count, isLoading} = this.props;

    return (
      <Layout>
        <Card>
          <div className="row">
            <div className="col s12">
              {isLoading && <Loader/>}
              {!_.isEmpty(data) &&
              <div>
                <h3>{count} Results</h3>
                <hr/>
                <Table headers={['id', 'description']} data={trimResults(data)} />
              </div>
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
  let data;
  if (state.Search.results) {
    data = state.Search.results.map(function (row) {
      row.id = <h4>{row.id}</h4>;
      return row;
    });
  }
  return {
    data,
    count: state.Search.count,
    isLoading: state.Search.status !== 'DONE'
  };
}

export default connect(mapStateToProps)(ResultsPage);

