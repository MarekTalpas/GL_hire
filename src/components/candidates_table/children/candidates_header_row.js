import React from 'react';
import {
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

const CandidatesHeaderRow = () =>
    <TableRow>
      <TableHeaderColumn
        style={{ width: '8%', 'border-bottom': '1px solid #fafafa' }}
      />
      <TableHeaderColumn style={{ width: '20%' }}>Name</TableHeaderColumn>
      <TableHeaderColumn style={{ width: '20%' }}>Phone</TableHeaderColumn>
      <TableHeaderColumn style={{ width: '25%' }}>Email</TableHeaderColumn>
      <TableHeaderColumn style={{ width: '15%' }}>Status</TableHeaderColumn>
      <TableHeaderColumn style={{ width: '12%' }}>Actions</TableHeaderColumn>
    </TableRow>;

export default CandidatesHeaderRow;
