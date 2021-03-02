import React, { memo } from 'react';
import { IntlProvider } from 'react-intl';
import './_styles.scss';
const Initialized = ({ translations, language, children }) => (React.createElement(IntlProvider, { locale: language, messages: translations[language] },
    React.createElement(React.Fragment, null, children)));
export default memo(Initialized);
//# sourceMappingURL=Initialized.js.map