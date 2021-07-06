import React from 'react';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MomentUtils from '@date-io/moment';
import { ConnectedRouter } from 'connected-react-router';
import JuweloTheme from './Theme';
import WebSocketConnection from '../WebSocket/WebSocketConnection';
import HtmlHead from './HtmlHead';
import { history } from '../../Store/Middleware';
const HOC = ({ title, store, children }) => {
    return (React.createElement(Provider, { store: store },
        React.createElement(MuiPickersUtilsProvider, { utils: MomentUtils },
            React.createElement(ThemeProvider, { theme: JuweloTheme },
                React.createElement(HtmlHead, { title: title }),
                React.createElement(CssBaseline, null),
                React.createElement(WebSocketConnection, null,
                    React.createElement(ConnectedRouter, { history: history }, children))))));
};
export default HOC;
