import React from 'react';
import {
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

const CandidatesHeader = () =>
  <TableHeader className="candidates-table__header">
    <TableRow>
      <TableHeaderColumn>Name</TableHeaderColumn>
      <TableHeaderColumn>Phone</TableHeaderColumn>
      <TableHeaderColumn>Email</TableHeaderColumn>
      <TableHeaderColumn>Status</TableHeaderColumn>
      <TableHeaderColumn>Actions</TableHeaderColumn>
    </TableRow>
  </TableHeader>;

export default CandidatesHeader;
