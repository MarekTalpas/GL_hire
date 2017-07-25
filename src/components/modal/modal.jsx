import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
//import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FaTrash from 'react-icons/lib/fa/trash';
import FaPencil from 'react-icons/lib/fa/pencil';
import LeftModalPart from './left_modal_part';
import RightModalPart from './right_modal_part';
import './modal.css';

class Modal extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     open: false,
  //   };
  //   this.handleOpen = this.handleOpen.bind(this);
  //   this.handleClose = this.handleClose.bind(this);
  // }

  // handleOpen() {
  //   this.setState({ open: true });
  // }

  // handleClose() {
  //   this.setState({ open: false });
  // }

  render() {
    const actions = [
      <FaTrash
        className='modHover'
        size={24}
        onClick={this.props.handleClose}        
      />,
      <FaPencil
        className='modHover'
        size={24}
        onTouchTap={this.props.handleClose}
        style={{ marginLeft: '20', marginRight: '10' }}
      />,
    ];

    const style = {
      backgroundColor: '#E0E0E0',
    };

    return (
      <div>
        <RaisedButton
          label="Modalbutton Modalbutton Modalbutton Modalbutton Dialog"
          onTouchTap={this.props.handleOpen}
        />
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
