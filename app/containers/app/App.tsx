import * as React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import Cookie from 'js-cookie';
import routes from '../../../../../../src/Routes';
import Config from '../../base/Config';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { changeLanguageAction } from '../../store/action/BaseAction';

import translations from '../../Translations';

import { IRootReducer } from '../../../../../../src/store/reducer/Root';
import { Switch, HashRouter } from 'react-router-dom';

export interface IAppProps {
  changeLanguageAction?: any;
  language?: any;

  store: any;
}

export interface IAppState {

}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.changeLanguageAction(this.props.language);
    ['de', 'en', 'fr', 'it'].map(abrev =>
      addLocaleData(require(`react-intl/locale-data/${abrev}`)));
  }

  render() {
    const { props: { language, store } } = this;

    return (
      <Provider store={store}>
        <IntlProvider locale={language} messages={translations[language]}>
          <HashRouter>
            <Switch>
              {routes}
            </Switch>
          </HashRouter>
        </IntlProvider>
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
    }
    catch(error) {

    }
    const cookie = Cookie.get('lang');
    return state.baseReducer.language
      ? state.baseReducer.language
      : cookie
        ? cookie
        : Config.Language
  })(),
  ...ownProps
});

const enhance = compose(
  connect(mapStateToProps, { changeLanguageAction })
);

export default enhance(App);
