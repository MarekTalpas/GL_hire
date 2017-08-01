import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import List from 'material-ui/List/List';
import Divider from 'material-ui/Divider';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

import InterviewLocation from './interview_location';
import InterviewRoom from './interview_room';
import InterviewPerson from './interview_person';

import './interview_info.css';

class InterviewInfo extends Component {
  render() {
    return (
      <div className='intInfoContainer'>
        <MuiThemeProvider>
          <List>
            <Subheader style={{ paddingLeft: 0 }}>Interview</Subheader>
            <Divider />
            <DatePicker
              hintText='Date'
              floatingLabelText='Date'
              container='inline'
            />
            <TimePicker
              hintText='Time'
              floatingLabelText='Time'
              format='24hr'
            />
            <InterviewLocation />
            <InterviewRoom />
            <InterviewPerson />
            <TextField
              hintText='Notes'
              floatingLabelText='Notes'
              multiLine={true}
              rows={3}
              //style={{ display: this.props.editFeatures ? 'block' : 'none' }}
            />
          </List>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default InterviewInfo;
