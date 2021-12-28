import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createReducer } from 'typesafe-actions';
import { IntlProvider } from 'react-intl';
import 'Core/Style/main.scss';
import 'material-icons/iconfont/material-icons.css';
import '@fontsource/roboto';
export const Stateful = ({ locale, messages, state, children }) => (React.createElement(Provider, { store: createStore(createReducer(state)) },
    React.createElement(IntlProvider, { locale: locale, messages: Object.assign({}, messages) },
        React.createElement(React.Fragment, null, children))));
//# sourceMappingURL=Stateful.js.map