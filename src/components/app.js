import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CandidatesTable from './candidates_table/candidates_table';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './login_page/login_page';
import { authUser, fetchLocations } from '../../API/fetch';

import MainPageComponent from './mainPage/mainPageComponent';
import InterviewComponent from './interview/interviewComponent';

injectTapEventPlugin();

export default class App extends Component {
  componentWillMount() {
    authUser();
    fetchLocations().then(cities => console.log('cities: ', cities.data));
  }

  render() {
    return (
      <div>
        <MainPageComponent />
        <BrowserRouter>
          <Switch >
            <Route path='/login' component={LoginPage} />
            <Route path='/interview' component={InterviewComponent} />
            <Route path='/candidateTable' component={CandidatesTable} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
