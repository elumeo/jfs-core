import React from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import useLoader from './useLoader';
import Initialized from './Initialized';
const Loader = ({ allowRobotLogin, translations, packageJson, children }) => {
    useLoader({ allowRobotLogin, translations, packageJson });
    const appInitialized = useSelector(state => state.Core.App.appInitialized);
    if (appInitialized) {
        return (React.createElement(Initialized, null, children));
    }
    else {
        return (React.createElement("div", { className: 'app-initialize-progress' },
            React.createElement(CircularProgress, { id: 'app-initialize-progress', scale: 2 })));
    }
};
export default Loader;
//# sourceMappingURL=Loader.js.map