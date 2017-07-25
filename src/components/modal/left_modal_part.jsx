import React, { Component } from 'react';
import Subheader from 'material-ui/Subheader';
import {
  List,
  ListItem,
} from 'material-ui/List';
import FaPhone from 'react-icons/lib/fa/phone';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaSkype from 'react-icons/lib/fa/skype';
import Avatar from 'material-ui/Avatar';

class LeftModalPart extends Component {
  render() {
    return (
      <div className='leftModal'>
        <List>
          <Subheader style={{ fontSize: '1.2em' }}>Candidate</Subheader>
          <ListItem
            primaryText='name'
            secondaryText='information'
            leftAvatar={<Avatar src='../../assets/images/johny.png' />}
          />  
          <ListItem primaryText='phone' leftIcon={<FaPhone />} />
          <ListItem primaryText='email' leftIcon={<FaEnvelope />} />
          <ListItem primaryText='skype' leftIcon={<FaSkype />} />
        </List>
      </div>
    );
  }
}

export default LeftModalPart;
