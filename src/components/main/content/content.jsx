import React from 'react';
import {
  Switch,
  Route } from 'react-router-dom';
import InterviewComponent from '../../interview/interviewComponent';
import CandidatesTable from '../../candidates_table/candidates_table';

const Content = () => (   
  <Switch>
    <Route exact path='/' />
    <Route path='/myInterviews' component={CandidatesTable} />
    <Route path='/newInterviews' component={InterviewComponent} />
  </Switch>   
);

export default Content;
