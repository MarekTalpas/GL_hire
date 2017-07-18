import React, { Component } from 'react';
import ButtonComponent from '../../common/buttonComponent';
import './interviewSubmitComponent.css';

class InterviewSubmitComponent extends Component {
  render() {
    return (
      <div className='submitContainer'>
        <div className='submitButtons'>
          <ButtonComponent buttonText='cancel' />
          <ButtonComponent buttonText='save' />
        </div>
        <ButtonComponent buttonText='close interview' />
      </div>
    );
  }
}

export default InterviewSubmitComponent;
