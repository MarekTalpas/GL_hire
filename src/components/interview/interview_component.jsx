import React, { Component } from 'react';
import InterviewCandidate from './candidate/interview_candidate';
import InterviewInfo from './interview_info/interview_info';
import InterviewSubmitComponent from './interview_submit_component';

import './interview_component.css';

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
