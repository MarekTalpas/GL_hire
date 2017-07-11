// @flow
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { lightBlue400 } from 'material-ui/styles/colors';
import './login_box.css';

const textfieldsStyles = {
  underlineStyle: {
    borderColor: lightBlue400,
  },
  floatingLabelFocusStyle: {
    color: lightBlue400,
  },
};

class LoginBox extends Component {
  renderTextField(type: string, hintText: string, labelText:string, errorText:string) {
    return (
      <TextField
        type={type}
        hintText={hintText}
        floatingLabelText={labelText}
        errorText={errorText}
        fullWidth
        underlineFocusStyle={textfieldsStyles.underlineStyle}
        floatingLabelFocusStyle={textfieldsStyles.floatingLabelFocusStyle}
      />
    );
  }
  render() {
    const { boxWidth, bodyPadding, headerColor, bodyColor } = this.props;
    const paperStyle = { width: boxWidth };
    const headerStyle = { backgroundColor: headerColor };
    const bodyStyle = { backgroundColor: bodyColor, padding: bodyPadding };
    return (
      <MuiThemeProvider>
        <Paper className="login-box" style={paperStyle} zDepth={2}>
          <header style={headerStyle} className="login-box__header">
            <img
              className="login-box__header-logo"
              src="../../../../assets/images/hiregl_logo.png"
              alt="application main logo"
            />
          </header>
          <form className="login-box__body" style={bodyStyle}>
            <Subheader>LOG IN</Subheader>
            <Divider />
            {this.renderTextField('text',
            'Enter Your Name', 'Username', 'username is required')}
            <br />
            {this.renderTextField('password',
            'Enter Your Password', 'Password', 'password is required')}
            <br /><br />
            <div className="error_btn_wrapper">
              <div className="login-box__error">Invalid username or password.
                <br />Please try again.
              </div>
              <RaisedButton
                className="login-box__btn"
                label="LOG IN"
                backgroundColor="#455A64"
                labelColor="#E1F5FE"
              />
            </div>
          </form>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default LoginBox;
