import React, { Component } from 'react';
import Sidebar from './sidebar/sidebar';
import HeaderComponent from './header/headerComponent';
import Content from './content/content';
import './main.css';

class Main extends Component {
  render() {
    return (
      <div className='mainContentContainer'>
        <div className='mainContainer'>
          <Sidebar />       
        </div>
        <HeaderComponent />
        <Content />
      </div>
    );
  }
}

export default Main;
