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
import ScrollView from "../components/ScrollView";

export function trimResults(data) {
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
    const styles = {
      sidebar: {
        float: 'left',
        backgroundColor: 'white',
        marginTop: '-20px',
        width: '33.333%'
      }
    };

    return (
      <Layout>
          <div className="row">
            <div style={styles.sidebar}>
              {isLoading && <Loader/>}
              {!_.isEmpty(data) &&
                <ScrollView scrollItems={data} />
              }
            </div>
            <div className="col-sm-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi, architecto autem commodi cumque dicta doloremque ea eveniet exercitationem labore nihil odit possimus quas quo reiciendis soluta tenetur ut vel.
            </div>
          </div>
      </Layout>
    );
  }
}

ResultsPage.propTypes = {};

function mapStateToProps(state) {
  let data;
  if (state.Search.results) {
    data = trimResults(state.Search.results);
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

