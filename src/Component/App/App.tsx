import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import WebSocketConnection from 'Component/Websocket/WebSocketConnection';
import Loader from './Loader';

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
      <Loader
        allowRobotLogin={allowRobotLogin}
        translations={translations}
        packageJson={packageJson}>
        {children}
      </Loader>
    </WebSocketConnection>
  </Provider>
);

export default App;
