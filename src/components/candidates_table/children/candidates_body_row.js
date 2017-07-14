// @flow
import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import FaEdit from 'react-icons/lib/fa/edit';
import './candidates_body_row.css';

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
  <TableRow className="table-row">
    <TableRowColumn className="table-row__column">
      {firstName} {lastName} {position}
    </TableRowColumn>
    <TableRowColumn className="table-row__column">{phone}</TableRowColumn>
    <TableRowColumn className="table-row__column">{email}</TableRowColumn>
    <TableRowColumn className="table-row__column">created</TableRowColumn>
    <TableRowColumn className="table-row__column">
      <FaEdit className="table-row__icon--edit" size={24} color="#616161" />
      <FaTrashO className="table-row__icon--trash" size={24} color="#616161" />
    </TableRowColumn>
  </TableRow>;

export default CandidatesRow;
