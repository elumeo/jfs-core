var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import Loader from './Loader';
// import { ConnectedRouter } from 'connected-react-router';
import HOC from './HOC';
const App = (_a) => {
    var { children, allowRobotLogin, translations, packageJson } = _a, props = __rest(_a, ["children", "allowRobotLogin", "translations", "packageJson"]);
    return (React.createElement(HOC, Object.assign({}, props),
        React.createElement(Loader, { allowRobotLogin: allowRobotLogin, translations: translations, packageJson: packageJson }, children)));
};
export default App;
