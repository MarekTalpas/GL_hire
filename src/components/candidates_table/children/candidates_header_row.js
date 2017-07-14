import React from 'react';
import {
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
import './candidates_header_row.css';

const renderHeaderCol = (width, fontSize, title, borderBottom = '') =>
<TableHeaderColumn
  className="table-row__column"
  style={{ width, fontSize, borderBottom }}
>
  <strong>{title}</strong>
</TableHeaderColumn>;

const CandidatesHeaderRow = () =>
    <TableRow className='table-row'>
      {renderHeaderCol('10%', '1rem', '', '1px solid #FAFAFA')}
      {renderHeaderCol('20%', '1rem', 'Name')}
      {renderHeaderCol('20%', '1rem', 'Phone')}
      {renderHeaderCol('25%', '1rem', 'Email')}
      {renderHeaderCol('15%', '1rem', 'Status')}
      {renderHeaderCol('10%', '1rem', 'Actions')}
    </TableRow>;

export default CandidatesHeaderRow;
