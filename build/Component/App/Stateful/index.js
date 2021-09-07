import React from 'react';
import { Provider } from 'react-redux';
import WebSocket from './WebSocket';
import Router from './Router';
import Initialized from './Initialized';
import International from './International';
import Snackbar from './Snackbar';
const Stateful = ({ store, translations, allowRobotLogin, packageJSON, children, }) => (React.createElement(Provider, { store: store },
    React.createElement(WebSocket, null,
        React.createElement(Router, null,
            React.createElement(Initialized, { allowRobotLogin: allowRobotLogin, packageJSON: packageJSON, translations: translations },
                React.createElement(International, { translations: translations },
                    React.createElement(Snackbar, null, children)))))));
export default Stateful;
