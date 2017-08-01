import React from 'react';
import {
  Route,
  Switch } from 'react-router-dom';
import InterviewComponent from '../../interview/interview_component';
import CandidatesTable from '../../candidates_table/candidates_table';
import LoginPage from '../../login_page/login_page';

const Router = ({
  handleClick
  //editFeatures
}) => (
  <Switch>
    <Route exact path='/' />
    <Route path='/login' component={LoginPage} />
    <Route
      path='/myInterviews'
      render={() => (<CandidatesTable handleClick={handleClick} />)}
    />
    <Route
      path='/newInterviews' component={InterviewComponent}
      //render={() => (<InterviewComponent editFeatures={editFeatures} />)}
    />
  </Switch>
);

export default Router;
