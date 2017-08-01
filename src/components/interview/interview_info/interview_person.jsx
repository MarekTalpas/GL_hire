import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class InterviewPerson extends Component {
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
          floatingLabelText='Person'
          floatingLabelFixed={true}
          hintText='Choose person'
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={null} primaryText='' />
          <MenuItem value={1} primaryText='Jana Dana' />
          <MenuItem value={2} primaryText='Maros Lubos' />
          <MenuItem value={3} primaryText='Lukas Peter' />
        </SelectField>
      </MuiThemeProvider>
    );
  }
}

export default InterviewPerson;
