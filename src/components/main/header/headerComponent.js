import React, { Component } from 'react';
import './headerComponent.css';
import UserComponent from './userComponent/userComponent';

class HeaderComponent extends Component {
  render() {
    return (
      <div className='header'>
        <div className='headerUser'>
          <UserComponent />
        </div>
        <h1 className='typeIntw'>{this.props.nameValue}</h1>
      </div>
    );
  }
}

export default HeaderComponent;
