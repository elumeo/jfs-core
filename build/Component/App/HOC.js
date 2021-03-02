import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../../Style/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
const HOC = ({ store, children }) => {
    const theme = Theme();
    return React.createElement(React.Fragment, null,
        React.createElement(Provider, { store: store },
            React.createElement(ThemeProvider, { theme: theme },
                React.createElement(CssBaseline, null),
                React.createElement(HashRouter, null, children))));
};
export default HOC;
//# sourceMappingURL=HOC.js.map