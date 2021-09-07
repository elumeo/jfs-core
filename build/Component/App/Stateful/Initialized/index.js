import React from 'react';
import useActions from '../../../../Store/useActions';
import useSelector from '../../../../Store/useSelector';
import Progress from './Progress';
const Initialized = ({ allowRobotLogin, packageJSON, translations, children }) => {
    const initialized = useSelector(state => state.Core.App.appInitialized);
    const { initializeApp } = useActions();
    React.useEffect(() => {
        initializeApp({
            allowRobotLogin,
            packageJson: packageJSON,
            translations
        });
    }, []);
    return (initialized
        ? React.createElement(React.Fragment, null, children)
        : React.createElement(Progress, null));
};
export default Initialized;
