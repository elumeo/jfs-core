import React from 'react';
import { CircularProgress } from '@material-ui/core';
import useLoader from './useLoader';
import Initialized from './Initialized';
import { isEmpty } from 'lodash';
const Loader = ({ allowRobotLogin, translations, packageJson, children }) => {
    const { appInitialized, language } = useLoader({
        allowRobotLogin,
        translations,
        packageJson
    });
    if (appInitialized && !isEmpty(translations)) {
        console.log('hier noch?', { appInitialized, translations, children, language });
        return (React.createElement(Initialized, { translations: translations, language: language }, children));
    }
    else {
        return (React.createElement("div", { className: 'app-initialize-progress' },
            React.createElement(CircularProgress, { id: 'app-initialize-progress' })));
    }
};
export default Loader;
//# sourceMappingURL=Loader.js.map