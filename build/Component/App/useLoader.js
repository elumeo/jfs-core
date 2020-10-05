import { useEffect } from 'react';
import { addLocaleData } from 'react-intl';
import useActions from '../../Store/Action/useActions';
import { useSelector } from '../../Types/Redux';
const useLoader = ({ allowRobotLogin, packageJson, translations }) => {
    const { initializeApp } = useActions();
    useEffect(() => {
        initializeApp({ allowRobotLogin, packageJson, translations });
        ['de', 'en', 'fr', 'it'].forEach(locale => addLocaleData(require(`react-intl/locale-data/${locale}`)));
    }, []);
    return useSelector(state => ({
        appInitialized: state.Core.App.appInitialized,
        language: state.Core.Language.language
    }));
};
export default useLoader;
//# sourceMappingURL=useLoader.js.map