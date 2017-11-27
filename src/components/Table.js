import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

function TableRow({ headers, fields, unSafe }) {
  return (
    <tr>
      {headers.map(function toField(header, index) {
        const value = fields[header];
        if (unSafe) {
          return (
            <td
              key={`field-${index}`}
              dangerouslySetInnerHTML={{ __html: value }}
            />
          );
        }
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
    const { data, headers, unSafe } = this.props;

    return (
      <table className="table table-striped">
        <TableHeader headers={headers} />
        <tbody>
          {data.map(function tableRowMap(row, index) {
            return (
              <TableRow
                key={`row-${index}`}
                headers={headers}
                unSafe={unSafe}
                fields={row}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  unSafe: PropTypes.bool,
};

Table.defaultProps = {
  unSafe: false,
};

export default Table;
