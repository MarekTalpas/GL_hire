import React, { Component } from 'react';
import './headerComponent.css';
import UserComponent from './userComponent/userComponent';

class HeaderComponent extends Component {
  render() {
    return (
      <div className='header'>
        some component
        <div className='headerUser'>
          <UserComponent />
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
