import React from 'react';
import Stateless from './Stateless';
import Stateful from './Stateful';
import Title from './Title';
const App = ({ children, allowRobotLogin, translations, packageJSON, title, store, }) => (React.createElement(Stateless, null,
    React.createElement(Title, { value: title || packageJSON.name }),
    React.createElement(Stateful, { store: store, allowRobotLogin: allowRobotLogin, packageJSON: packageJSON, translations: translations }, children)));
export default App;
