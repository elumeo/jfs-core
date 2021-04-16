import React from 'react';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Store } from 'redux';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';
import MomentUtils from '@date-io/moment';
import WebSocketConnection from 'Component/WebSocket/WebSocketConnection';
import * as Notification from 'Component/Notification';
import Head from './Head';

export type Props = {
  store: Store;
}

const HOC: React.FC<Props> = ({
  store, children
}) => {
  const theme = Theme();
  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            maxSnack={5}
            domRoot={document.getElementById('overlay')}>
            <Notification.Notistack/>
            <Head/>
            <CssBaseline />
            <WebSocketConnection>
              {/* <ConnectedRouter history={history}> */}
              <HashRouter>
                {children}
              </HashRouter>
            </WebSocketConnection>
            {/* </ConnectedRouter> */}
          </SnackbarProvider>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </Provider>
  );
};

export default HOC;
