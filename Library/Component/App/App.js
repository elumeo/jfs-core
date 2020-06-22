import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import Initialized from './Initialized';
import WebSocketConnection from '../Websocket/WebSocketConnection';
import { initializeApp } from '../../Store/Action/AppAction';
import { addLocaleData } from 'react-intl';
const App = ({ store, translations, children, initializeApp, allowRobotLogin, packageJson }) => {
    useEffect(() => {
        initializeApp({
            allowRobotLogin,
            packageJson,
            translations
        });
        ['de', 'en', 'fr', 'it'].forEach((locale) => addLocaleData(require(`react-intl/locale-data/${locale}`)));
    });
    return (React.createElement(Provider, { store: store },
        React.createElement(WebSocketConnection, null,
            React.createElement(Initialized, null, children))));
};
const mapStateToProps = (_state, ownProps) => (Object.assign({}, ownProps));
const enhance = compose(connect(mapStateToProps, { initializeApp }));
export default enhance(App);
//# sourceMappingURL=App.js.map