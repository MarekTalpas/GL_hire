// @flow
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { lightBlue400 } from 'material-ui/styles/colors';
import * as actions from '../../../actions';
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
  state = {
    text: false,
    password: false,
  }
  handleFormSubmit = ({ username, password }) => this.props.signinUser({ username, password });
  handleInputChange = (ev) => {
    if (ev.target.value.trim().length) {
      this.setState({ [ev.target.type]: true });
    }
  }
  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="login-box__error">{this.props.errorMessage}
          <br />Please try again.
        </div>
      );
    }
  }
  renderTextField(
    type: string, hintText: string, labelText: string, errorText: string, credentials) {
    return (
      <TextField
        onChange={this.handleInputChange}
        maxLength="25"
        type={type}
        hintText={hintText}
        floatingLabelText={labelText}
        errorText={this.state[type] ? '' : errorText}
        fullWidth
        underlineFocusStyle={textfieldsStyles.underlineStyle}
        floatingLabelFocusStyle={textfieldsStyles.floatingLabelFocusStyle}
        {...credentials}
      />
    );
  }
  render() {
    const { handleSubmit, fields: { username, password } } = this.props;
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
          <form
            onSubmit={handleSubmit(this.handleFormSubmit)}
            className="login-box__body" style={bodyStyle}
          >
            <Subheader>LOG IN</Subheader>
            <Divider />
            {this.renderTextField('text',
              'Enter Your Name', 'Username', 'username is required', { ...username })}
            <br />
            {this.renderTextField('password',
              'Enter Your Password', 'Password', 'password is required', { ...password })}
            <br /><br />
            <div className="error_btn_wrapper">
              {this.renderAlert()}
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

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['username', 'password']
}, mapStateToProps, actions)(LoginBox);
