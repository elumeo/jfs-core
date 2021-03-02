import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from 'Style/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';

export type Props = {
  store: Store;
}

const HOC: React.FC<Props> = ({
  store, children
}) => {
  const theme = Theme()
  return  <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        {/* <WebSocketConnection> */}
          {/* <ConnectedRouter history={history}> */}
          <HashRouter>
            {children}
          </HashRouter>
        {/* </WebSocketConnection> */}
          {/* </ConnectedRouter> */}
          </ThemeProvider>
    </Provider>
  </>
};

export default HOC;
