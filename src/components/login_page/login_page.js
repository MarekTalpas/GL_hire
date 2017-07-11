// @flow
import React from 'react';
import LoginBox from './children/login_box';
import './login_page.css';

type LoginBoxOptionsType = {
  boxWidth: number,
  bodyPadding: number,
  bodyColor: string,
  headerColor: string,
}

const loginBoxOptions: LoginBoxOptionsType = {
  boxWidth: 400,
  bodyPadding: 20,
  bodyColor: '#FFF',
  headerColor: '#4FC3F7'
};

const LoginPage = (props: any) => (
  <LoginBox className="login-page" {...loginBoxOptions} >
    { props.children }
  </LoginBox>
);

export default LoginPage;
