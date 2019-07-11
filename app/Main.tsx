import * as React from 'react';
import { render } from 'react-dom';
// store, history & routes -----------------------------------------------------

import Container from './Container';
import { configLoadedAction } from './store/action/ConfigAction';
import './style/main.scss';

import createStore from './store/Store';
const store = createStore();

const { reloading } = window.sessionStorage;
if (reloading && JSON.parse(reloading)) {
  window.sessionStorage.reloading = false;
  window.sessionStorage.loginReloaded = true;
  window.sessionStorage.logout = false;
}
else
{
  window.sessionStorage.loginReloaded = false;
  window.sessionStorage.reloading = false;
  window.sessionStorage.logout = false;
}

/** @todo import the new config **/
const config = {};
store.dispatch(configLoadedAction(config));
setTimeout(
  () =>
    render(
      <Container store={store}/>,
      document.getElementById('root')
    ),
  100
);
