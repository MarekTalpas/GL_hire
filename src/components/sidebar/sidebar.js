import React, { Component } from 'react';

import FaPlus from 'react-icons/lib/fa/plus';
import FaArchive from 'react-icons/lib/fa/archive';

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
        <ul>
          {/*{renderList(sidebarList)}*/}
          <li>
            <FaArchive className='sidebarIcon' /><span>my interviews</span>
          </li>
          <li><FaPlus className='sidebarIcon' /><span>new interviews</span></li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
