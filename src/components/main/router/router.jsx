import React from 'react';
import {
  Route,
  Switch } from 'react-router-dom';
import InterviewComponent from '../../interview/interviewComponent';
import CandidatesTable from '../../candidates_table/candidates_table';

const Router = ({
  handleClick
}) => (   
  <Switch>
    <Route exact path='/' />
    <Route
      path='/myInterviews'
      render={() => (<CandidatesTable handleClick={handleClick} />)}
    />
    <Route path='/newInterviews' component={InterviewComponent} />
  </Switch>   
);

export default Router;
