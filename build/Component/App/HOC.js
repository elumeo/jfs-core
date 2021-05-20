import React from 'react';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';
import MomentUtils from '@date-io/moment';
import WebSocketConnection from '../WebSocket/WebSocketConnection';
import * as Notification from '../Notification';
import Head from './Head';
const HOC = ({ title, store, children }) => {
    const theme = Theme();
    return (React.createElement(Provider, { store: store },
        React.createElement(MuiPickersUtilsProvider, { utils: MomentUtils },
            React.createElement(ThemeProvider, { theme: theme },
                React.createElement(SnackbarProvider, { anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    }, maxSnack: 5, domRoot: document.getElementById('overlay') },
                    React.createElement(Notification.Notistack, null),
                    React.createElement(Head, { title: title }),
                    React.createElement(CssBaseline, null),
                    React.createElement(WebSocketConnection, null,
                        React.createElement(HashRouter, null, children)))))));
};
export default HOC;
