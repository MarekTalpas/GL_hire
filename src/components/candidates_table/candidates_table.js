import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  Table,
  TableBody,
  TableHeader,
} from 'material-ui/Table';

import CandidatesHeaderRow from './children/candidates_header_row';
import store from '../store/store.json';
import CandidatesBodyRow from './children/candidates_body_row';
import './candidates_table.css';

const tableStyle = {
  width: 'calc(100% - 410px)',
  backgroundColor: '#FAFAFA',
};

class CandidateTable extends Component {
  renderBodyRows() {
    return store.candidates.map(candidate =>
      <CandidatesBodyRow
        key={candidate.id}
        avatarUrl={candidate.data.avatar_url}
        firstName={candidate.data.firstName}
        lastName={candidate.data.lastName}
        position={candidate.data.position}
        phone={candidate.data.phone}
        email={candidate.data.email}
        status={candidate.interview.status}
      />
    );
  }
  render() {
    console.log('store: ', store);
    return (
      <MuiThemeProvider>
        <Table
          fixedHeader={false}
          style={tableStyle}
          className="candidates-table"
        >
          <TableHeader className="candidates-table__header">
            <CandidatesHeaderRow />
          </TableHeader>
          <TableBody>
            {this.renderBodyRows()}
          </TableBody>
        </Table>
      </MuiThemeProvider>
    );
  }
}

export default CandidateTable;
