import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Main from './main/main';

injectTapEventPlugin();

export default class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}
