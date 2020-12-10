import React from 'react';

import TableHeader from './header';
import TableRow from "./row";

export default function Table(props) {
  const { headers, rowsData } = props;

  return (
    <table className="table table-hover">
      <TableHeader headers={props.headers} />

      <tbody>
        {
          rowsData.map((row, index) => (
            <TableRow fields={row} key={`table_row_${index + 1}`} />
          ))
        }
      </tbody>
    </table>
  )
}
