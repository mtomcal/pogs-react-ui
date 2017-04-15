import React, {
  Component,
} from 'react';
// import PropTypes from 'prop-types';
import Card from '../components/Card';
import Table from '../components/Table';
import Loader from '../components/Loader';
import Layout from '../containers/Layout';
import {connect} from 'react-redux';
import _ from 'lodash';
import qs from 'qs';
import {static as Immutable} from 'seamless-immutable';
import {Search} from '../actions';

export function trimResults(_data) {
  const data = _.cloneDeep(_data);
  return data.map(function (row) {
    return Immutable.setIn(row, ['description'], _.truncate(row.description, {length: 140}));
  });
}

class ResultsPage extends Component {
  constructor(props) {
    super(props);
    const values = qs.parse(props.location.search.replace('?', ''));
    props.searchAction(values);
  }
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
    data = state.Search.results.map(function (row, index) {
      return Immutable.setIn(row, ['id'], <h4>{row.id}</h4>);
    });
  }
  return {
    data,
    count: state.Search.count,
    isLoading: state.Search.status !== 'DONE'
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchAction(values) {
      dispatch(Search.searchQuery(values));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);

