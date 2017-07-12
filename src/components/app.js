import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import { Router, Route, Switch } from 'react-router-dom';

import LoginPage from './login_page/login_page';
import { authUser, fetchLocations } from '../../API/fetch';

import Sidebar from './sidebar/sidebar';
import HeaderComponent from './header/headerComponent';

injectTapEventPlugin();

export default class App extends Component {
  componentWillMount() {
    authUser();
    fetchLocations().then(cities => console.log('cities: ', cities.data));
  }
  render() {
    return (
      <div className="app">
        <LoginPage />
        <Sidebar />
        <HeaderComponent />
      </div>
    );
  }
}
