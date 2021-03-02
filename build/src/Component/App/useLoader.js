import { useEffect } from 'react';
import useActions from '../../../Store/Action/useActions';
import { useSelector } from 'react-redux';
const useLoader = ({ allowRobotLogin, packageJson, translations }) => {
    const { initializeApp } = useActions();
    useEffect(() => {
        initializeApp({ allowRobotLogin, packageJson, translations });
        ['de', 'en', 'fr', 'it'].forEach(locale => {
            // require(`@formatjs/intl-pluralrules/locale-data/${locale}`)       
            // require(`@formatjs/intl-relativetimeformat/locale-data/${locale}`) 
        });
    }, []);
    return useSelector(state => ({
        appInitialized: state.Core.App.appInitialized,
        language: state.Core.Language.language
    }));
};
export default useLoader;
//# sourceMappingURL=useLoader.js.map