import * as React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import { connect, Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { compose } from 'redux';
import Cookie from 'js-cookie';

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
  ForceHTTPS?: boolean;
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
    this.checkProtocol();
    this.addLocales();
  }

  addLocales = () => {
    const {props: {changeLanguageAction, language}} = this;
    const locales = ['de', 'en', 'fr', 'it'];
    changeLanguageAction(language);
    locales.map(
      abrev => addLocaleData(require(`react-intl/locale-data/${abrev}`))
    );
  };

  checkProtocol = () => {
    const {props: {ForceHTTPS}} = this;
    const isHTTPS = window.location.protocol.toLowerCase() === 'https:';
    if (!isHTTPS && ForceHTTPS) {
      window.location.replace(
        window.location.toString().replace('http:', 'https:')
      );
    }
  };

  render = () => {
    const {
      props: {language, store, Translations, children, appInitialized}
    } = this;

    const messages = mergeTranslations(Translations);

    return (
      <Provider store={store}>
        <WebSocketConnection>
          <IntlProvider
            locale={language}
            messages={messages[language]}
            key={language}>
            <HashRouter>
              <>
                {appInitialized && children}
              </>
            </HashRouter>
          </IntlProvider>
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
  language: (() => {
    try {
      JSON.parse(document.cookie);
      document.cookie = '';
    } catch (error) {
    }

    const cookie = Cookie.get('lang');
    return state.languageReducer.language
      ? state.languageReducer.language
      : cookie
        ? cookie
        : state.configReducer.config && state.configReducer.config.Language
          ? state.configReducer.config.Language
          : 'en'
  })(),
  ForceHTTPS: state.configReducer.config && state.configReducer.config.ForceHTTPS,
  appInitialized: state.appReducer.appInitialized,
  ...ownProps
});

const enhance = compose(
  connect(mapStateToProps, {changeLanguageAction, initializeApp})
);

export default enhance(App);
