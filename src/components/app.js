import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { authUser, fetchLocations } from '../../API/fetch';

import Main from './main/main';
//import Content from './content/content';

injectTapEventPlugin();

export default class App extends Component {
  componentWillMount() {
    authUser();
    fetchLocations().then(cities => console.log('cities: ', cities.data));
  }

  render() {
    return (
      <div>
        <Main />
        {/*<Content />*/}
      </div>
    );
  }
}
