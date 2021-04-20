import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useIntl } from 'react-intl';
const Empty = () => {
    const { formatMessage } = useIntl();
    const iconRef = React.useRef();
    return (React.createElement(Box, { component: 'div', style: {
            width: 'max-content',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'grey'
        } },
        React.createElement(NotificationsIcon, { fontSize: 'large', ref: iconRef }),
        React.createElement(Typography, null, formatMessage({ id: 'app.noNotifications' }))));
};
export default Empty;
