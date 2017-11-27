import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import Layout from '../containers/Layout';
import _ from 'lodash';
import qs from 'qs';
import { domainQuery } from '../redux/actions/domains';
import { profileQuery } from '../redux/actions/profile';
import { searchQuery } from '../redux/actions/search';
import { getAllPogs, getPogStatus } from '../redux/selectors/search';
import {
  getDomainsStatus,
  getDomainCollection,
} from '../redux/selectors/domains';
import {
  getGenemodelEntities,
  getLocusStatus,
} from '../redux/selectors/profile';
import { status } from '../config/default';
import ScrollView from '../components/ScrollView';
import Profile from '../components/Profile';
class ResultsPage extends Component {
  constructor(props) {
    super(props);
    const values = qs.parse(props.location.search.replace('?', ''));
    props.searchQuery(values);
  }
  state = {
    profileId: null,
  };
  onMenuSelect = item => {
    this.setState(
      state => ({
        profileId: Number(item.id),
      }),
      () => {
        this.props.profileQuery({ id: Number(item.id), profileType: 'pog' });
        this.props.domainQuery({ id: Number(item.id) });
      },
    );
  };
  render() {
    const {
      resultData,
      domains,
      geneModels,
      isLoading,
      isLoadingProfile,
    } = this.props;

    return (
      <Layout>
        <div className="row">
          <div className="sidebar">
            {isLoading && <Loader />}
            {!isLoading && (
              <ScrollView
                scrollItems={resultData}
                onSelectItem={this.onMenuSelect}
              />
            )}
          </div>
          <div className="col-sm-8">
            {!isLoadingProfile && (
              <Profile
                domains={domains}
                geneModels={geneModels}
                id={this.state.profileId}
              />
            )}
            {isLoadingProfile && <Loader />}
          </div>
        </div>
      </Layout>
    );
  }
}

{
  const { arrayOf, shape, bool } = PropTypes;
  ResultsPage.propTypes = {
    resultData: arrayOf(shape({})),
    geneModels: arrayOf(shape({})),
    isLoading: bool.isRequired,
    isLoadingProfile: bool.isRequired,
  };
}

function mapStateToProps(state) {
  return {
    resultData: getAllPogs(state),
    domains: getDomainCollection(state),
    geneModels: getGenemodelEntities(state),
    isLoading: getPogStatus(state) !== status.DONE,
    isLoadingProfile:
      getLocusStatus(state) !== status.DONE &&
      getDomainsStatus(state) !== status.DONE,
  };
}

export default connect(mapStateToProps, {
  profileQuery,
  searchQuery,
  domainQuery,
})(ResultsPage);
