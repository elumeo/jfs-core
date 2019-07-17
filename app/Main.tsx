import * as React from 'react';
import { render } from 'react-dom';

// -----------------------------------------------------------------------------

import './style/main.scss';

import Container from './Container';
import createStore from './store/Store';
import routes from '../../../../src/Routes';
import translations from './Translations';

// -----------------------------------------------------------------------------

import { configLoadedAction } from './store/action/ConfigAction';

// -----------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------

/** @todo import the new config **/
const config = {};
store.dispatch(configLoadedAction(config));
setTimeout(
  () =>
    render(
      <Container
        store={store}
        routes={routes}
        translations={translations}
      />,
      document.getElementById('root')
    ),
  100
);
