import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  Table,
  TableBody,
} from 'material-ui/Table';

import CandidatesHeader from './children/candidates_header';
import store from '../store/store.json';
import CandidatesRow from './children/candidates_row';
import './candidates_table.css';

const tableStyle = {
  width: 'calc(100% - 350px)',
  backgroundColor: '#FAFAFA',
};

class CandidateTable extends Component {
  renderRows() {
    return store.candidates.map(candidate =>
      <CandidatesRow
        key={candidate.id}
        firstName={candidate.data.firstName}
        lastName={candidate.data.lastName}
        position={candidate.data.position}
        phone={candidate.data.phone}
        email={candidate.data.email}
        status={candidate.data.status}
      />
    );
  }
  render() {
    console.log('store: ', store);
    return (
      <MuiThemeProvider>
        <Table style={tableStyle} className="candidates-table">
          <CandidatesHeader />
          <TableBody>
            {this.renderRows()}
          </TableBody>
        </Table>
      </MuiThemeProvider>
    );
  }
}

export default CandidateTable;
