import React, { Component } from 'react';

import FaPlus from 'react-icons/lib/fa/plus';
import FaArchive from 'react-icons/lib/fa/archive';
import { Link } from 'react-router-dom';

//import * as data from '../store/dataSidebar';

import './sidebar.css';

class Sidebar extends Component {
  render() {    
    const logo = '../../../assets/images/global_hire.png';
    
    //const sidebarList = data.DataSidebar.list;

    // const renderLiList = (name, index) =>
    //   <li key={index}>{name.icon}<span>{name.name}</span></li>;

    // const renderList = (x) =>
    //   x.map((name, index) => renderLiList(name, index));
   
    return (
      <div className='sidebar'>
        <img className='logo' src={logo} alt='logo here' />        
          <ul className='sidebarList'>
            {/*{renderList(sidebarList)}*/}
            <li>
              <Link
                to='/myInterviews'
                onTouchTap={() => (this.props.handleClick('My Interviews'))}
              >
                <FaArchive className='sidebarIcon' />
                  my interviews
              </Link>
            </li>
            <li>
              <Link
                to='/newInterviews'
                onTouchTap={() => (this.props.handleClick('New Interviews'))}
                //editFeatures={this.props.editFeatures}
              >
                <FaPlus className='sidebarIcon' />
                  new interviews
              </Link>
            </li>
          </ul>
      </div>
    );
  }
}

export default Sidebar;
