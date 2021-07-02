import React from 'react';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import MomentUtils from '@date-io/moment';
import WebSocketConnection from '../../../Component/WebSocket/WebSocketConnection';
import Head from './Head';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../../../Store/Middleware';
const HOC = ({ title, store, children }) => {
    const theme = Theme();
    return (React.createElement(Provider, { store: store },
        React.createElement(MuiPickersUtilsProvider, { utils: MomentUtils },
            React.createElement(ThemeProvider, { theme: theme },
                React.createElement(Head, { title: title }),
                React.createElement(CssBaseline, null),
                React.createElement(WebSocketConnection, null,
                    React.createElement(ConnectedRouter, { history: history }, children))))));
};
export default HOC;
