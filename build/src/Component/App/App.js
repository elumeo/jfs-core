import React from 'react';
import { Provider } from 'react-redux';
import WebSocketConnection from '../../../Component/Websocket/WebSocketConnection';
import Loader from './Loader';
const App = ({ store, children, allowRobotLogin, translations, packageJson }) => (React.createElement(Provider, { store: store },
    React.createElement(WebSocketConnection, null,
        React.createElement(Loader, { allowRobotLogin: allowRobotLogin, translations: translations, packageJson: packageJson }, children))));
export default App;
//# sourceMappingURL=App.js.map