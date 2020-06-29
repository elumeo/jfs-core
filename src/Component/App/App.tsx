import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';

import Initialized from './Initialized';
import WebSocketConnection from '../Websocket/WebSocketConnection';

import Global from '../../Store/Reducer/Global';
import { initializeApp } from '../../Store/Action/AppAction';

import { addLocaleData } from 'react-intl';

namespace App {
  export type Props = {
    allowRobotLogin?: boolean;
    initializeApp?: typeof initializeApp;
    language?: string;
    location?: Location;
    store;
    translations: { [language: string]: { [key: string]: string } };
    appInitialized?: boolean;
    packageJson: object;
  }
}

const App: React.FC<App.Props> = ({
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
      ['de', 'en', 'fr', 'it'].forEach(
        (locale) => addLocaleData(
          require(`react-intl/locale-data/${locale}`)
        )
      );
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
  _state: Global.State,
  ownProps: IAppProps
): IAppProps => ({
  ...ownProps
});

const enhance = compose(
  connect(mapStateToProps, { initializeApp })
);

export default enhance(App);
