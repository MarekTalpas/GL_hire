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
        <h2 className='typeIntw'>Edit Interview</h2>
      </div>
    );
  }
}

export default HeaderComponent;
