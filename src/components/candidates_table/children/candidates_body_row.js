// @flow
import React from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import FaEdit from 'react-icons/lib/fa/edit';
import Avatar from 'material-ui/Avatar';
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
  avatarUrl,
  firstName,
  lastName,
  position,
  phone,
  email,
  status,
}: CandidateType) =>
  <TableRow className="table-row">
    <TableRowColumn
      className="table-row__column"
      style={{ width: '8%', 'border-bottom': '1px solid #fafafa' }}
    >
      <Avatar
        className="table-row__avatar"
        src={avatarUrl}
        alt="avatar"
        size={60}
      />
    </TableRowColumn>
    <TableRowColumn className="table-row__column" style={{ width: '20%', borderBottom: '0px' }}>
      {firstName} {lastName} {position}
    </TableRowColumn>
    <TableRowColumn className="table-row__column" style={{ width: '20%' }}>
      {phone}
    </TableRowColumn>
    <TableRowColumn className="table-row__column" style={{ width: '25%' }}>
      {email}
    </TableRowColumn>
    <TableRowColumn className="table-row__column" style={{ width: '15%' }}>
      {status}
    </TableRowColumn>
    <TableRowColumn className="table-row__column" style={{ width: '12%' }}>
      <FaEdit className="table-row__icon--edit" size={24} color="#616161" />
      <FaTrashO className="table-row__icon--trash" size={24} color="#616161" />
    </TableRowColumn>
  </TableRow>;

export default CandidatesRow;
