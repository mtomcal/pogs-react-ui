import React, {
  Component,
  PropTypes,
} from 'react';

import _ from 'lodash';

function TableRow({headers, fields}) {
  return (
    <tr>
      {headers.map(function toField(header, index) {
        return <td key={`field-${index}`}>{fields[header]}</td>
      })}
    </tr>
  );
}

TableRow.propTypes = {};

function TableHeader({headers}) {
  return (
    <thead>
    <tr>
      {headers.map(function header(headerField, index) {
        return <th key={`header-${index}`}>{_.capitalize(headerField)}</th>
      })}
    </tr>
    </thead>
  );
}

TableHeader.propTypes = {};

class Table extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {data, headers} = this.props;

    return (
      <table className="striped">
        <TableHeader headers={headers} />
        <tbody>
        {data.map(function tableRowMap(row, index) {
          return <TableRow key={`row-${index}`} headers={headers} fields={row} />
        })}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Table;












