import * as React from 'react';
import { render } from 'react-dom';

import createStore from './store/Store';
import { configLoadedAction } from './store/action/ConfigAction';

// -----------------------------------------------------------------------------

import './style/main.scss';
import App from './containers/app/App';

// -----------------------------------------------------------------------------

Date.prototype.toJSON = function() {
  const iso = this.toISOString();
  return iso.replace(/\..+/, '+00:00'); // W3C format for JSC
};

// -----------------------------------------------------------------------------

const store = createStore();
/** @todo import the new config **/
const config = {};
store.dispatch(configLoadedAction(config));

setTimeout(
  () => render(<App store={store}/>, document.getElementById('root') ),
  100
);
