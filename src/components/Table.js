import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

function TableRow({ headers, fields }) {
  return (
    <tr>
      {headers.map(function toField(header, index) {
        const value = fields[header];
        return <td key={`field-${index}`}>{value}</td>;
      })}
    </tr>
  );
}

TableRow.propTypes = {};

function TableHeader({ headers }) {
  return (
    <thead>
      <tr>
        {headers.map(function header(headerField, index) {
          return <th key={`header-${index}`}>{_.capitalize(headerField)}</th>;
        })}
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {};

class Table extends Component {
  render() {
    const { data, headers } = this.props;

    return (
      <table className="table table-striped">
        <TableHeader headers={headers} />
        <tbody>
          {data.map(function tableRowMap(row, index) {
            return (
              <TableRow key={`row-${index}`} headers={headers} fields={row} />
            );
          })}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
