import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import { useSnackbar } from 'notistack';
import { useIntl } from 'react-intl';
const DefaultNotificationCard = ({ notification: { title, subtitle, content, action, id, isTranslationId = false }, temporary }) => {
    const snackbar = useSnackbar();
    const { formatMessage } = useIntl();
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, { color: 'inherit' },
            title && (React.createElement(Typography, { variant: 'subtitle1', component: 'div' }, isTranslationId
                ? formatMessage({ id: title })
                : title)),
            subtitle && (React.createElement(Typography, { variant: 'subtitle2', component: 'div' }, isTranslationId
                ? formatMessage({ id: subtitle })
                : subtitle)),
            content && (React.createElement(Typography, { variant: 'body1', component: 'div' }, isTranslationId
                ? formatMessage({ id: content })
                : content))),
        !temporary && action && (React.createElement(CardActions, null, action(snackbar, id, temporary)))));
};
export default DefaultNotificationCard;
