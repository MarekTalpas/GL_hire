// @flow
import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import List from 'material-ui/List/List';
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';

import InterviewLocation from './interviewLocation';
import InterviewRoom from './interviewRoom';
import InterviewPerson from './interviewPerson';

class InterviewInfo extends Component {

  renderTextField(type: string, hintText: string, errorText: string, labelText: string) {
      return (
        <TextField
          type={type}
          hintText={hintText}
          //errorText={errorText}
          floatingLabelText={labelText}
        />
      );
    }

  render() {
    const style = {
      width: 250,
      margin: 50,
    };

    return (
      <div style={style}>
      <MuiThemeProvider>
        <List>
          <Subheader style={{paddingLeft: 0}}>Interview</Subheader>
          <Divider />
          {this.renderTextField('text', 'Date', 'This field is required', 'Date')}
          {this.renderTextField('text', 'Time', 'This field is required', 'Time')}
          <InterviewLocation />
          <InterviewRoom />
          <InterviewPerson />
        </List>         
      </MuiThemeProvider>
      </div>
    )
  }
}

export default InterviewInfo;
