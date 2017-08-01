import React, { Component } from 'react';
import './header_component.css';
import UserComponent from './user_component/user_component';

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
