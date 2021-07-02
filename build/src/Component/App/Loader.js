import React from 'react';
import useLoader from './useLoader';
import Initialized from './Initialized';
import { isEmpty } from 'lodash';
import Progress from './Progress';
const Loader = ({ allowRobotLogin, translations, packageJson, children }) => {
    const { appInitialized, language } = useLoader({
        allowRobotLogin,
        translations,
        packageJson
    });
    return (appInitialized && !isEmpty(translations)
        ? (React.createElement(Initialized, { translations: translations, language: language }, children))
        : React.createElement(Progress, null));
};
export default Loader;
