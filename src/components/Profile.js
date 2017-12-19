import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import _ from 'lodash';
// import {static as Immutable} from 'seamless-immutable';
import Table from './Table';

export default class Profile extends Component {
  render() {
    const { id, geneModels, domains } = this.props;
    const headers = ['genemodel', 'desc'];
    return (
      <div className="profile">
        <h1>Orthologous Group {id ? id : ''}</h1>
        <hr />
        <div>
          <h2>Models</h2>
          <hr />
          <Table data={geneModels} headers={headers} />
        </div>
        <div>
          <h2>Domain Architecture of POG Members</h2>
          <hr />
          <Table data={domains} unSafe headers={['id', 'domain']} />
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  id: PropTypes.number.isRequired,
  geneModels: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
