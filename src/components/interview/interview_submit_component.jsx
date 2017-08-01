import React, { Component } from 'react';
import ButtonComponent from '../../common/button_component';
import './interview_submit_component.css';

class InterviewSubmitComponent extends Component {
  render() {
    return (
      <div className='submitContainer'>
        <div className='submitButtons'>
          <ButtonComponent buttonText='cancel' />
          <ButtonComponent buttonText='save' />
        </div>
        <ButtonComponent
          //style={{ display: this.props.editFeatures ? 'block' : 'none' }}
          buttonText='close interview'
        />
      </div>
    );
  }
}

export default InterviewSubmitComponent;
