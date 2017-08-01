import React, { Component } from 'react';
import Sidebar from './sidebar/sidebar';
import HeaderComponent from './header/header_component';
import Router from './router/router';
import './main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      //editFeatures: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState({
      nameValue: value,
      //editFeatures: false, 
    });
  }

  render() {
    return (
      <div className='mainContentContainer'>
        <div className='mainContainer'>
          <Sidebar
            handleClick={this.handleClick}
            //editFeatures={this.state.editFeatures}
          />
        </div>
        <HeaderComponent nameValue={this.state.nameValue} />
        <Router
          handleClick={this.handleClick}
          //editFeatures={this.state.editFeatures}
        />
      </div>
    );
  }
}

export default Main;
