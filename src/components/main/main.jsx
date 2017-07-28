import React, { Component } from 'react';
import Sidebar from './sidebar/sidebar';
import HeaderComponent from './header/headerComponent';
import Router from './router/router';
import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState({ nameValue: value });
    }

  render() {
    return (
      <div className='mainContentContainer'>
        <div className='mainContainer'>
          <Sidebar
            handleClick={this.handleClick}
          />
        </div>
        <HeaderComponent nameValue={this.state.nameValue} />
        <Router handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Main;
