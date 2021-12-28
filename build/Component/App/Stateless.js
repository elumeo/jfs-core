import React from 'react';
import { IntlProvider } from 'react-intl';
import 'Core/Style/main.scss';
import 'material-icons/iconfont/material-icons.css';
import '@fontsource/roboto';
export const Stateless = ({ locale, messages, children }) => (React.createElement(IntlProvider, { locale: locale, messages: Object.assign({}, messages) },
    React.createElement(React.Fragment, null, children)));
//# sourceMappingURL=Stateless.js.map