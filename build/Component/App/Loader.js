import React from 'react';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import useLoader from './useLoader';
import Initialized from './Initialized';
const Loader = ({ allowRobotLogin, translations, packageJson, children }) => {
    const { appInitialized, language } = useLoader({
        allowRobotLogin,
        translations,
        packageJson
    });
    if (appInitialized && translations) {
        return (React.createElement(Initialized, { translations: translations, language: language }, children));
    }
    else {
        return (React.createElement("div", { className: 'app-initialize-progress' },
            React.createElement(CircularProgress, { id: 'app-initialize-progress', scale: 2 })));
    }
};
export default Loader;
//# sourceMappingURL=Loader.js.map