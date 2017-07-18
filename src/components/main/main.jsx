import React, { Component } from 'react';
import Sidebar from '../sidebar/sidebar';
import HeaderComponent from '../header/headerComponent';

class Main extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <HeaderComponent />
      </div>
    );
  }
}

export default Main;
