import React, { Component } from 'react';
import InterviewCandidate from './candidate/interviewCandidate';
import InterviewInfo from './interviewInfo/interviewInfo';
import InterviewSubmitComponent from './interviewSubmitComponent';

import './interviewComponent.css';

class InterviewComponent extends Component {
  render() {
    return (
      <div className='interviewContainer'>
        <div className='interviewForms'>
          <InterviewCandidate />
          <InterviewInfo />
        </div>
        <InterviewSubmitComponent />
      </div>
    );
  }
}

export default InterviewComponent;
