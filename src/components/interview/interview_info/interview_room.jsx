import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class InterviewRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({ value });
  }

  render() {
    return (
      <MuiThemeProvider>
        <SelectField
          floatingLabelText='Room'
          floatingLabelFixed={true}
          hintText='Choose room'
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={null} primaryText='' />
          <MenuItem value={1} primaryText='Ararat' />
          <MenuItem value={2} primaryText='Matrix' />
          <MenuItem value={3} primaryText='Mordor' />
        </SelectField>
      </MuiThemeProvider>
    );
  }
}

export default InterviewRoom;
