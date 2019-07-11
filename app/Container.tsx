import * as React from 'react';
import { compose } from 'redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { Switch, HashRouter } from 'react-router-dom';
import { changeLanguageAction } from './store/action/BaseAction';
import { IRootReducer } from '../../../src/store/reducer/Root';
import Config from './base/Config';
import AppContainer from './containers/app/AppContainer';

import routes from '../../../src/Routes';

import defaultTranslations from './Translations.json';
import appTranslations from '../../../src/Translations.json';

const translations = defaultTranslations;
for (const language in translations) {
  const defaultLanguage = translations[language];
  const appLanguage = appTranslations[language];
  if (appLanguage) translations[language] = Object.assign(defaultLanguage, appLanguage);
}

import { Provider } from 'react-redux';

// props & state ---------------------------------------------------------------
interface IContainerProps {
  checkSessionAction?: () => void;
  changeLanguageAction?: (lang: string) => void;

  language?: string;
  isCheckingSession?: boolean;
  isAuthorized?: boolean;
  store: any;
}

interface IContainerState {}

// component -------------------------------------------------------------------
class Container extends React.Component<IContainerProps, IContainerState> {
  constructor(props: IContainerProps) {
    super(props);
    this.props.changeLanguageAction(this.props.language);
    ['de', 'en', 'fr', 'it'].map(abrev =>
      addLocaleData(require(`react-intl/locale-data/${abrev}`)));
  }

  render() {
    const { language, store } = this.props;

    return (
      <Provider store={store}>
        <IntlProvider locale={language} messages={translations[language]}>
          <HashRouter>
            <div>
              <AppContainer key="appContainer"/>
              <Switch>
                {Object.keys(routes).map(name => routes[name]())}
              </Switch>
            </div>
          </HashRouter>
        </IntlProvider>
      </Provider>
    );
  }
}

function cookieData(key: string) {
  if (document.cookie.length) {
    let cookie = JSON.parse(document.cookie);
    return cookie[key];
  }
  return null;
}

// higher order components -----------------------------------------------------
const mapStateToProps = (state: IRootReducer, ownProps: IContainerProps): IContainerProps => ({
  language: state.baseReducer.language
    ? state.baseReducer.language
    : cookieData('lang')
      ? JSON.parse(document.cookie).lang
      : Config.Language,
  ...ownProps
});

const mapDispatchToProps = { changeLanguageAction };

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Container);
