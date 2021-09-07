import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import { useSnackbar } from 'notistack';
import { useIntl } from 'react-intl';
const DefaultNotificationCard = ({ notification: { title, subtitle, content, action, id, isTranslationId = false, httpDetails, timeStamp }, temporary, }) => {
    const snackbar = useSnackbar();
    const { formatMessage, formatDate, formatTime } = useIntl();
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, { color: 'inherit' },
            title && (React.createElement(Typography, { variant: 'h6', component: 'div' }, isTranslationId ? formatMessage({ id: title }) : title)),
            subtitle && (React.createElement(Typography, { variant: 'subtitle1', component: 'div' }, isTranslationId
                ? formatMessage({ id: subtitle })
                : subtitle)),
            content && (React.createElement(Typography, { variant: 'body2', component: 'div' }, isTranslationId
                ? formatMessage({ id: content })
                : content)),
            (httpDetails || timeStamp) &&
                React.createElement(Box, { pt: 0.5 },
                    httpDetails && React.createElement(Typography, { variant: 'caption', component: 'div' }, httpDetails),
                    timeStamp &&
                        React.createElement(Typography, { variant: 'caption', component: 'div' },
                            formatDate(timeStamp, { dateStyle: 'medium' }),
                            "\u00A0",
                            formatTime(timeStamp, { timeStyle: 'medium' })))),
        !temporary && action && React.createElement(CardActions, null, action(snackbar, id, temporary))));
};
export default DefaultNotificationCard;
