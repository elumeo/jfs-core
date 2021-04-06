import React from 'react';
import * as MUI from '@material-ui/core';
import { useIntl } from 'react-intl';
const Empty = () => {
    const { formatMessage } = useIntl();
    const iconRef = React.useRef();
    return (React.createElement(MUI.Box, { component: 'div', style: {
            width: 'max-content',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        } },
        React.createElement(MUI.Icon, { fontSize: 'large', ref: iconRef }, "notifications"),
        React.createElement(MUI.Popper, { open: true, modifiers: {
                arrow: {
                    enabled: false,
                    element: iconRef
                }
            } },
            React.createElement(MUI.Typography, null, formatMessage({ id: 'app.noNotifications' })))));
};
export default Empty;
//# sourceMappingURL=Empty.js.map