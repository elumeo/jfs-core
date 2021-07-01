import React from 'react';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Store } from 'redux';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import MomentUtils from '@date-io/moment';
import WebSocketConnection from 'Component/WebSocket/WebSocketConnection';
import Head from './Head';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'Store/Middleware'

export type Props = {
  title: string;
  store: Store;
}

const HOC: React.FC<Props> = ({
  title, store, children
}) => {
  const theme = Theme();
  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <ThemeProvider theme={theme}>
          <Head title={title} />
          <CssBaseline />
          <WebSocketConnection>
            <ConnectedRouter history={history}>
              {children}
            </ConnectedRouter>
          </WebSocketConnection>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </Provider>
  );
};

export default HOC;
