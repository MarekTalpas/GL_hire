import React, { Component } from 'react';
import InterviewCandidate from './candidate/interviewCandidate';
import InterviewInfo from './interviewInfo/interviewInfo';

import './interviewComponent.css';

class InterviewComponent extends Component {
  render() {
    return (
      <div className='mainIntContainer'>
        <InterviewCandidate />
        <InterviewInfo />
      </div>
    );
  }
}

export default InterviewComponent;
