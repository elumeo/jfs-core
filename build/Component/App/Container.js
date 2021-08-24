import React from 'react';
import Loader from './Loader';
import HOC from './HOC';
const App = ({ children, allowRobotLogin, translations, packageJson, title, store, }) => (React.createElement(HOC, { title: title || packageJson.name, store: store },
    React.createElement(Loader, { allowRobotLogin: allowRobotLogin, translations: translations, packageJson: packageJson }, children)));
export default App;
