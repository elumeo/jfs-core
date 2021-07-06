import React from 'react';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MomentUtils from '@date-io/moment';
import { Store } from 'redux';
import { ConnectedRouter } from 'connected-react-router';

import JuweloTheme from './Theme';
import WebSocketConnection from 'Component/WebSocket/WebSocketConnection';
import HtmlHead from './HtmlHead';
import { history } from 'Store/Middleware'

export type Props = {
  title: string;
  store: Store;
}

const HOC: React.FC<Props> = ({title, store, children}) => {
  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <ThemeProvider theme={JuweloTheme}>
          <HtmlHead title={title}/>
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
