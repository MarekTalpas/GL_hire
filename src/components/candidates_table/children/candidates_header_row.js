import React from 'react';
import {
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

const CandidatesHeader = () =>
    <TableRow>
      <TableHeaderColumn>Name</TableHeaderColumn>
      <TableHeaderColumn>Phone</TableHeaderColumn>
      <TableHeaderColumn>Email</TableHeaderColumn>
      <TableHeaderColumn>Status</TableHeaderColumn>
      <TableHeaderColumn>Actions</TableHeaderColumn>
    </TableRow>;

export default CandidatesHeader;
