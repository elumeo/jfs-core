import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import WebSocketConnection from 'Component/Websocket/WebSocketConnection';
import Loader from './Loader';
import { HashRouter } from 'react-router-dom';

export type Props = {
  store: Store;
  allowRobotLogin?: boolean;
  translations: {
    [language: string]: {
      [key: string]: string
    };
  };
  packageJson: object;
}

const App: React.FC<Props> = ({
  store, children, allowRobotLogin, translations, packageJson
}) => (
  <Provider store={store}>
    <WebSocketConnection>
      <HashRouter>
        <Loader
          allowRobotLogin={allowRobotLogin}
          translations={translations}
          packageJson={packageJson}>
          {children}
        </Loader>
      </HashRouter>
    </WebSocketConnection>
  </Provider>
);

export default App;
