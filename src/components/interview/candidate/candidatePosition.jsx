import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class CandidatePosition extends Component {
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
          floatingLabelText='Choose position'
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={null} primaryText='' />
          <MenuItem value={1} primaryText='tester' />
          <MenuItem value={2} primaryText='manager' />
          <MenuItem value={3} primaryText='economist' />
          <MenuItem value={4} primaryText='web developer' />
        </SelectField>
      </MuiThemeProvider>
    );
  }
}

export default CandidatePosition;
