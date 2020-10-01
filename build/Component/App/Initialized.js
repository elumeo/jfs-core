import React from 'react';
import { IntlProvider } from 'react-intl';
import { HashRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './_styles.scss';
const Initialized = ({ children }) => {
    const { language, translations } = useSelector(state => ({
        language: state.Core.Language.language,
        translations: state.Core.Language.messages
    }));
    return (React.createElement(HashRouter, null,
        React.createElement(IntlProvider, { locale: language, messages: translations[language] },
            React.createElement(React.Fragment, null, children))));
};
export default Initialized;
//# sourceMappingURL=Initialized.js.map