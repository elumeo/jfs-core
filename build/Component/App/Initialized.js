import React, { memo } from 'react';
import { IntlProvider } from 'react-intl';
import * as Notification from '../Notification';
import { SnackbarProvider } from 'notistack';
const Initialized = ({ translations, language, children }) => (React.createElement(IntlProvider, { locale: language, messages: translations[language] },
    React.createElement(React.Fragment, null,
        React.createElement(SnackbarProvider, { anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
            }, maxSnack: 5, domRoot: document.getElementById('overlay') },
            React.createElement(Notification.Notistack, null),
            children))));
export default memo(Initialized);
