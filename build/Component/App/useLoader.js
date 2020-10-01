import { useEffect } from 'react';
import { addLocaleData } from 'react-intl';
import useActions from '../../Store/Action/useActions';
const useLoader = ({ allowRobotLogin, packageJson, translations }) => {
    const { initializeApp } = useActions();
    useEffect(() => {
        initializeApp({ allowRobotLogin, packageJson, translations });
        ['de', 'en', 'fr', 'it'].forEach(locale => addLocaleData(require(`react-intl/locale-data/${locale}`)));
    }, []);
};
export default useLoader;
//# sourceMappingURL=useLoader.js.map