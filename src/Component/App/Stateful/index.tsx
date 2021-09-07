import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import WebSocket from './WebSocket';
import Router from './Router';
import Initialized from './Initialized';
import International from './International';
import Snackbar from './Snackbar';

export type Props = {
  store: Store;
  translations: Record<string, Record<string, string>>;
  packageJSON: Record<string, unknown>;
  allowRobotLogin?: boolean;
};

const Stateful: React.FC<Props> = ({
  store,
  translations,
  allowRobotLogin,
  packageJSON,
  children,
}) => (
  <Provider store={store}>
    <WebSocket>
      <Router>
        <Initialized
          allowRobotLogin={allowRobotLogin}
          packageJSON={packageJSON}
          translations={translations}>
          <International translations={translations}>
            <Snackbar>
              {children}
            </Snackbar>
          </International>
        </Initialized>
      </Router>
    </WebSocket>
  </Provider>
);

export default Stateful;