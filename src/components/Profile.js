import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// import {static as Immutable} from 'seamless-immutable';
import Table from './Table';

export default class Profile extends Component {
  render() {
    const {id} = this.props;
    const geneModels = _.toArray(this.props.geneModels);
    const headers = ['genemodel', 'desc'];
    return (
      <div className="profile">
        <h3>Orthologous Group {id}</h3>
        <hr/>
        <Table data={geneModels} headers={headers} />
      </div>
    );
  }
}

Profile.propTypes = {
  id: PropTypes.number.isRequired,
  geneModels: PropTypes.object.isRequired
};
