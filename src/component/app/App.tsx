import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { connect, Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { compose } from 'redux';

import { initializeApp } from '../../store/action/AppAction';
import { changeLanguageAction } from '../../store/action/LanguageAction';
import mergeTranslations from '../../Translations';
import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import WebSocketConnection from '../websocket/WebSocketConnection';

export interface IAppProps {
  allowRobotLogin?: boolean;
  initializeApp?: typeof initializeApp;
  changeLanguageAction?: typeof changeLanguageAction;
  language?: string;
  location?: Location;
  store: any;
  Translations;
  appInitialized?: boolean;
  packageJson: object;
}

export interface IAppState {
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props) {
    super(props);
    const { props: { initializeApp, allowRobotLogin, packageJson } } = this;
    initializeApp({
      allowRobotLogin,
      packageJson
    });
  }

  render = () => {
    const {
      props: {language, store, Translations, children, appInitialized}
    } = this;

    const messages = mergeTranslations(Translations);

    return (
      <Provider store={store}>
        <WebSocketConnection>
          {
            language && appInitialized
              ? (
                <IntlProvider
                  locale={language}
                  messages={messages[language]}
                  key={language}>
                  <HashRouter>
                    <>
                      {children}
                    </>
                  </HashRouter>
                </IntlProvider>
              )
              : (
                <></>
              )
          }
        </WebSocketConnection>
      </Provider>
    );
  }
}

// higher order components -----------------------------------------------------
const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: IAppProps
): IAppProps => ({
  language: state.languageReducer.language,
  appInitialized: state.appReducer.appInitialized,
  ...ownProps
});

const enhance = compose(
  connect(mapStateToProps, {changeLanguageAction, initializeApp})
);

export default enhance(App);
