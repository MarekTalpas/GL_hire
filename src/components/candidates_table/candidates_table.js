import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableFooter,
} from 'material-ui/Table';
import Pagination from 'material-ui-pagination';

import { fetchCandidates } from '../../actions/index';
import CandidatesHeaderRow from './children/candidates_header_row';
import store from '../store/store.json';
import CandidatesBodyRow from './children/candidates_body_row';
import './candidates_table.css';
// import * as actions from '../../actions/index';
import Modal from '../modal/modal';

const tableStyle = {
  width: 'calc(100% - 410px)',
  backgroundColor: '#FAFAFA',
};

class CandidateTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      //value: '',
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    this.props.fetchCandidates();
  }

  handleOpen(/*value*/) {
    this.setState({
      open: true,
      //value,
    });
  }

  handleClose() {
    this.setState({ open: false });
  }

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
        handleOpen={this.handleOpen}
      />);
  }
  render() {
    return (
      <MuiThemeProvider>
      <div>
          <Table
            fixedHeader={false}
            fixedFooter={false}
            style={tableStyle}
            className="candidates-table"
          >
            <TableHeader
              className="candidates-table__header"
            >
              <CandidatesHeaderRow />
            </TableHeader>
            <TableBody
              className="candidates-table__body"
            >
              {this.renderBodyRows()}
            </TableBody>
            <TableFooter
              className="candidates-table__footer"
              style={{ width: '500px' }}
            >
            <div className="candidates-table__pagination">
              <Pagination
                total={10}
                current={1}
                display={5}
              />
            </div>
          </TableFooter>
        </Table>
        <Modal 
          handleClose={this.handleClose}
          open={this.state.open}
          //value={this.state.value}
        />
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCandidates }, dispatch);
}

export default connect(null, mapDispatchToProps)(CandidateTable);
