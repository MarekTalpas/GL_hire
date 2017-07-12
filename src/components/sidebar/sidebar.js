import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
  render() {
    const logo = '../../../assets/images/global_hire.png';

    return (
      <div className='sidebar'>
        <img className='logo' src={logo} alt='logo here' />
      </div>
    );
  }
}

export default Sidebar;
