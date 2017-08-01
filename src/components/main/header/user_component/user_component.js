import React, { Component } from 'react';

import FaArrowRight from 'react-icons/lib/fa/arrow-right';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

//remove later
import {
  blue300,
  indigo900,
} from 'material-ui/styles/colors';

import './user_component.css';

class UserComponent extends Component {
  render() {
    const style = {
      margin: 5,
    };

    const userStyle = {
      textTransform: 'capitalize',
    };

    return (
      <div style={userStyle}>
        <MuiThemeProvider>
          <List>
            <ListItem
              disabled={true}
              leftAvatar={
                <Avatar
                  color={blue300}
                  backgroundColor={indigo900}
                  size={30}
                  style={style}
                  src={'../../../../assets/images/johny.png'}
                />
              }
            >
              Johny Cash
              <FaArrowRight className='faIcon' />
            </ListItem>
          </List>
        </MuiThemeProvider>

      </div>
      );
  }
}

export default UserComponent;
