import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';

import Initialized from './Initialized';
import WebSocketConnection from '../websocket/WebSocketConnection';

import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import { initializeApp } from '../../store/action/AppAction';

export interface IAppProps {
  allowRobotLogin?: boolean;
  initializeApp?: typeof initializeApp;
  language?: string;
  location?: Location;
  store: any;
  translations: { [language: string]: { [key: string]: string } };
  appInitialized?: boolean;
  packageJson: object;
}

const App: React.FC<IAppProps> = ({
  store,
  translations,
  children,
  initializeApp, allowRobotLogin, packageJson
}) => {
  useEffect(
    () => {
      initializeApp({
        allowRobotLogin,
        packageJson,
        translations
      });
    }
  );
  return (
    <Provider store={store}>
      <WebSocketConnection>
        <Initialized>
          {children}
        </Initialized>
      </WebSocketConnection>
    </Provider>
  )
}

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: IAppProps
): IAppProps => ({
  ...ownProps,
  appInitialized: state.appReducer.appInitialized
});

const enhance = compose(
  connect(mapStateToProps, { initializeApp })
);

export default enhance(App);
