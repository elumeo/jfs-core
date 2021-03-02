import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import Loader from './Loader';
import { HashRouter, useLocation } from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@material-ui/core/styles';
import  { history } from 'Store/Middleware'
import Theme from 'Style/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
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
}) => {
  const theme = Theme()
  return  <>
    <Provider store={store}>
      <ThemeProvider  theme={theme}>
      <CssBaseline />
        {/* <WebSocketConnection> */}
          {/* <ConnectedRouter history={history}> */}
          <HashRouter>
            <Loader
              allowRobotLogin={allowRobotLogin}
              translations={translations}
              packageJson={packageJson}>
              {children}
            </Loader>
          </HashRouter>
        {/* </WebSocketConnection> */}
          {/* </ConnectedRouter> */}
          </ThemeProvider>
    </Provider>
  </>
};

export default App;
