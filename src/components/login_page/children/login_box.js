// @flow
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { lightBlue400 } from 'material-ui/styles/colors';
import * as actions from '../../../actions';
import { signinUser } from '../../../actions';
import './login_box.css';

const renderAlert = (errorMessage) => {
  if (errorMessage) {
    return (
      <div className="login-box__error">
        <strong>Oops!</strong> {errorMessage}
      </div>
    );
  }
};

const validate = values => {
  const errors = {};
  const requiredFields = [
    'username',
    'password',
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

const textfieldsStyles = {
  underlineStyle: {
    borderColor: lightBlue400,
  },
  floatingLabelFocusStyle: {
    color: lightBlue400,
  },
};

const renderTextField = ({
  input,
  label,
  type,
  meta: { touched, error },
  ...custom
}) =>
  <TextField
    hintText={label}
    floatingLabelText={label}
    type={type}
    errorText={touched && error}
    fullWidth
    maxLength="25"
    underlineFocusStyle={textfieldsStyles.underlineStyle}
    floatingLabelFocusStyle={textfieldsStyles.floatingLabelFocusStyle}
    {...input}
    {...custom}
  />;

const LoginBox = ({
  errorMessage,
  handleSubmit,
  // fields: { username, password },
  // signinUser,
  // fields: { username, password },
  // pristine,
  reset,
  // submitting,
  boxWidth,
  bodyPadding,
  headerColor,
  bodyColor
}) => {
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
          onSubmit={handleSubmit(signinUser)}
          className="login-box__body"
          style={bodyStyle}
        >
          <Subheader>LOG IN</Subheader>
          <Divider />
          <Field
            name="username"
            component={renderTextField}
            label="Username"
            type="text"
          />
          <br />
          <Field
            name="password"
            component={renderTextField}
            label="Password"
            type="password"
          />
          <br /><br />
          <div className="error_btn_wrapper">
            {renderAlert(errorMessage)}
            <RaisedButton
              className="login-box__btn"
              label="LOG IN"
              type="submit"
              backgroundColor="#455A64"
              labelColor="#E1F5FE"
              // onClick={reset}
              // disabled={pristine || submitting}
            />
          </div>
        </form>
      </Paper>
    </MuiThemeProvider>
  );
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'Signin',
  // fields: ['username', 'password'],
  validate,
}, mapStateToProps, actions)(LoginBox);
