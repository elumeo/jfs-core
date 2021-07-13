import { useEffect } from 'react';
import useActions from '../../Store/useActions';
import { useSelector } from '../../Types/Redux';
const useLoader = ({ allowRobotLogin, packageJson, translations }) => {
    const { initializeApp } = useActions();
    useEffect(() => {
        initializeApp({ allowRobotLogin, packageJson, translations });
    }, []);
    return useSelector(state => ({
        appInitialized: state.Core.App.appInitialized,
        language: state.Core.Language.language
    }));
};
export default useLoader;
