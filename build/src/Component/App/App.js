import React from 'react';
import { Provider } from 'react-redux';
import Loader from './Loader';
import { HashRouter } from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from 'Style/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
const App = ({ store, children, allowRobotLogin, translations, packageJson }) => {
    const theme = Theme();
    return React.createElement(React.Fragment, null,
        React.createElement(Provider, { store: store },
            React.createElement(ThemeProvider, { theme: theme },
                React.createElement(CssBaseline, null),
                React.createElement(HashRouter, null,
                    React.createElement(Loader, { allowRobotLogin: allowRobotLogin, translations: translations, packageJson: packageJson }, children)))));
};
export default App;
//# sourceMappingURL=App.js.map