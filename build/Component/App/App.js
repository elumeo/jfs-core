import React from 'react';
import { Provider } from 'react-redux';
import WebSocketConnection from '../Websocket/WebSocketConnection';
import Loader from './Loader';
import { HashRouter } from 'react-router-dom';
const App = ({ store, children, allowRobotLogin, translations, packageJson }) => (React.createElement(Provider, { store: store },
    React.createElement(WebSocketConnection, null,
        React.createElement(HashRouter, null,
            React.createElement(Loader, { allowRobotLogin: allowRobotLogin, translations: translations, packageJson: packageJson }, children)))));
export default App;
//# sourceMappingURL=App.js.map