import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/app';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
