import * as React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import { connect, Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { compose } from 'redux';
import Cookie from 'js-cookie';

import { changeLanguageAction } from '../../store/action/LanguageAction';
import mergeTranslations from '../../Translations';
import IRootReducer from '../../store/reducer/RootReducer';
import WebSocketConnection from '../websocket/WebSocketConnection';

export interface IAppProps {
  changeLanguageAction?: any;
  language?: any;
  location?: Location;
  store: any;
  Translations;
  loadConfig?;
  ForceHTTPS?: boolean;
}

export interface IAppState {
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props) {
    super(props);
    this.addLocales();
  }

  componentDidUpdate(prevProps: Readonly<IAppProps>, prevState: Readonly<IAppState>, snapshot?: any): void {
    this.checkProtocol();
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
    const isHTTPS = window.location.protocol.toLowerCase() == 'https:';
    if (!isHTTPS && ForceHTTPS) {
      window.location.replace(window.location.toString().replace('http:', 'https:'));
    }
  };

  render() {
    const {props: {language, store, Translations, children}} = this;

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
                {children}
              </>
            </HashRouter>
          </IntlProvider>
        </WebSocketConnection>
      </Provider>
    );
  }
}

// higher order components -----------------------------------------------------
const mapStateToProps = (state: IRootReducer, ownProps: IAppProps): IAppProps => ({
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
        : state.configReducer.Language
          ? state.configReducer.Language
          : 'en'
  })(),
  ForceHTTPS: state.configReducer.ForceHTTPS,
  ...ownProps
});

const enhance = compose(
  connect(mapStateToProps, {changeLanguageAction})
);

// noinspection JSUnusedGlobalSymbols
export default enhance(App);
