import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import App from '@/routes';
import './styles/reset.global.css';
/* eslint-disable-next-line */
let T = hot(module)(App);
ReactDOM.render(
  <HashRouter>
    <T />
  </HashRouter>,
  document.getElementById('root')
);
