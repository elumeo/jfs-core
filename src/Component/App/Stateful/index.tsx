import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import WebSocket from './WebSocket';
import Initializer from './Initializer';
import International from './International';
import Snackbar from './Snackbar';
import Initialized from './Initialized';
import Uninitialized from './Uninitialized';

export type Props = React.PropsWithChildren<{
  store: Store;
}>;

const Stateful: React.FC<Props> & {
  Snackbar: typeof Snackbar;
  Initializer: typeof Initializer;
  International: typeof International;
  Initialized: typeof Initialized;
  Uninitialized: typeof Uninitialized;
} = ({ store, children }) => (
  <Provider store={store}>
    <WebSocket>
        {children}
    </WebSocket>
  </Provider>
);

Stateful.Snackbar = Snackbar;
Stateful.Initializer = Initializer;
Stateful.International = International;
Stateful.Initialized = Initialized;
Stateful.Uninitialized = Uninitialized;

export default Stateful;
