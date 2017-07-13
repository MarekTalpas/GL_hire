// @flow
import React from 'react';

import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

type CandidateType = {
  firstName: string,
  lastName: string,
  position: string,
  phone: number,
  email: string,
  status: string,
}

const CandidatesRow = ({
  firstName,
  lastName,
  position,
  phone,
  email,
}: CandidateType) =>
  <TableRow>
    <TableRowColumn>{firstName} {lastName} {position}</TableRowColumn>
    <TableRowColumn>{phone}</TableRowColumn>
    <TableRowColumn>{email}</TableRowColumn>
    <TableRowColumn>created</TableRowColumn>
    <TableRowColumn>pen bin</TableRowColumn>
  </TableRow>;

export default CandidatesRow;
