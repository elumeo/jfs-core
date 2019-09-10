import * as React from 'react';
import { render } from 'react-dom';

import createStore from './store/Store';
import { configLoadedAction } from './store/action/ConfigAction';

// -----------------------------------------------------------------------------

import './style/main.scss';
import App from './containers/app/App';
const moment = require('moment');

// -----------------------------------------------------------------------------

Date.prototype.toJSON = function() {
  return moment(this).format();
};

// -----------------------------------------------------------------------------

window.sessionStorage.firstLoad = true;

// -----------------------------------------------------------------------------

const store = createStore();
/** @todo import the new config **/
const config = {};
store.dispatch(configLoadedAction(config));

setTimeout(
  () => render(<App store={store}/>, document.getElementById('root') ),
  100
);
