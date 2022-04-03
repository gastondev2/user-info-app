import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@babel/polyfill';
import '../styles/global.css';
import Users from './pages/users';
import composeStore from './store';

ReactDOM.render(
  <Provider store={composeStore()}>
    <Users />
  </Provider>,
  document.getElementById('app')
);
