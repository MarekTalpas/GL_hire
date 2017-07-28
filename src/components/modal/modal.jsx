import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import FaTrash from 'react-icons/lib/fa/trash';
import FaPencil from 'react-icons/lib/fa/pencil';
import LeftModalPart from './left_modal_part';
import RightModalPart from './right_modal_part';
import './modal.css';

class Modal extends Component {
  render() {
    const actions = [
      <FaTrash
        className='modHover'
        size={16}
        onTouchTap={this.props.handleClose}        
      />,
      <Link
        to='/newInterviews'
        onTouchTap={this.props.handleClick('Edit Interview')}
      >
        <FaPencil
          className='modHover'
          size={16}
          style={{ marginLeft: '20', marginRight: '10' }}
        />,
      </Link>
    ];

    const style = {
      backgroundColor: '#E0E0E0',
    };

    return (
      <div>
        <Dialog
          className='modContainer'
          bodyStyle={style}
          actions={actions}
          actionsContainerStyle={style}
          modal={true}
          open={this.props.open}
        >
          <div className='leftPart'>
            <LeftModalPart />
          </div>
          <div className='rightPart'>
            <RightModalPart handleClose={this.props.handleClose} />
          </div>
        </Dialog>
      </div>
    );
  }
}

export default Modal;
