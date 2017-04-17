import React, {
  Component,
} from 'react';
// import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import Layout from '../containers/Layout';
import {connect} from 'react-redux';
import _ from 'lodash';
import qs from 'qs';
import {static as Immutable} from 'seamless-immutable';
import {Search, Profile as ProfileReducer} from '../actions';
import ScrollView from "../components/ScrollView";
import Profile from '../components/Profile';

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
    props.loadProfile(5562);
  }
  render() {
    const {resultData, geneModels, id, isLoading} = this.props;

    return (
      <Layout>
          <div className="row">
            <div className="sidebar">
              {isLoading && <Loader/>}
              {!isLoading && <ScrollView scrollItems={resultData} />}
            </div>
            <div className="col-sm-8">
              {!isLoading && <Profile geneModels={geneModels} id={id} /> }
            </div>
          </div>
      </Layout>
    );
  }
}

ResultsPage.propTypes = {};

function mapStateToProps(state) {
  let resultData;
  if (state.Search.results) {
    resultData = trimResults(state.Search.results);
  }
  return {
    resultData,
    id: state.Profile.currentProfileId,
    geneModels: state.Profile.results,
    isLoading: (state.Search.status !== 'DONE' || state.Search.status !== 'DONE' || (
      _.isEmpty(state.Search.results) || _.isEmpty(state.Profile.results)
    ))
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchAction(values) {
      dispatch(Search.searchQuery(values));
    },
    loadProfile(id) {
      dispatch(ProfileReducer.profileQuery({profileType: 'pog', id}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);

