import React from 'react';
import { IntlProvider } from 'react-intl';
import useSelector from '../../../Store/useSelector';
const International = ({ translations, children }) => {
    const locale = useSelector(state => state.Core.Language.language);
    return (React.createElement(IntlProvider, { locale: locale, messages: translations[locale] || {} }, children));
};
export default International;
