import React, { Component } from 'react';
import Subheader from 'material-ui/Subheader';
import {
  List,
  ListItem,
} from 'material-ui/List';
import './right_modal_part.css';

class RightModalPart extends Component {
  render() {
    const styles = {
      header: {
        fontSize: '1.2em',
      },
      subheader: {
        fontSize: '0.8em',
        padding: 0,
      },
    };

    return (
      <div className='rightModal'>
        <List>
        <div
          className='closeModal'
          onClick={this.props.handleClose}
        >
          x
        </div>
        <Subheader style={styles.header}>Interview</Subheader>
          <ListItem primaryText='Date'>
            <Subheader style={styles.subheader}>Date</Subheader>
          </ListItem>
          <ListItem primaryText='Date'>
            <Subheader style={styles.subheader}>Time</Subheader>
          </ListItem>
          <ListItem primaryText='Date'>
            <Subheader style={styles.subheader}>Location</Subheader>
          </ListItem>
          <ListItem primaryText='Date'>
            <Subheader style={styles.subheader}>Room</Subheader>
          </ListItem>
          <ListItem primaryText='Date'>
            <Subheader style={styles.subheader}>Assigned Person</Subheader>
          </ListItem>
          <ListItem primaryText='Date'>
            <Subheader style={styles.subheader}>Notes</Subheader>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default RightModalPart;
