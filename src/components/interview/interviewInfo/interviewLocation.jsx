import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class InterviewLocation extends Component {
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
          floatingLabelText = 'Location'
          floatingLabelFixed={true}
          hintText = 'Choose location'
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={null} primaryText='' />
          <MenuItem value={1} primaryText='Banska Bystrica' />
          <MenuItem value={2} primaryText='Kosice' />
          <MenuItem value={3} primaryText='Zilina' />
        </SelectField>
      </MuiThemeProvider>
    );
  }
}

export default InterviewLocation;
