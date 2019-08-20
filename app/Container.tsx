import * as React from 'react';
import { compose } from 'redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { Switch, HashRouter } from 'react-router-dom';
import { changeLanguageAction } from './store/action/BaseAction';
import { IRootReducer } from '../../../../src/store/reducer/Root';
import Config from './base/Config';
import AppContainer from './containers/app/AppContainer';

import { Provider } from 'react-redux';

import Cookie from 'js-cookie';

// props & state ---------------------------------------------------------------
interface IContainerProps {
  checkSessionAction?: () => void;
  changeLanguageAction?: (lang: string) => void;

  language?: string;
  isCheckingSession?: boolean;
  isAuthorized?: boolean;
  store: any;
  routes: any[];
  translations: object;
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
    const { language, store, routes, translations } = this.props;

    return (
      <Provider store={store}>
        <IntlProvider locale={language} messages={translations[language]}>
          <HashRouter>
            <>
              <AppContainer key="appContainer"/>
              <Switch>
                {routes}
              </Switch>
            </>
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
  language: (() => {
    const cookie = Cookie.get('lang');
    return state.baseReducer.language
      ? state.baseReducer.language
      : cookie
        ? cookie
        : Config.Language
  })(),
  ...ownProps
});

const mapDispatchToProps = { changeLanguageAction };

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Container);
