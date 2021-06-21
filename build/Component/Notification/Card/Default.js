import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import { useSnackbar } from 'notistack';
const DefaultNotificationCard = ({ notification: { title, subtitle, content, action, id }, temporary }) => {
    const snackbar = useSnackbar();
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, { component: CardContent, color: 'inherit' },
            React.createElement(Typography, { variant: 'subtitle1', component: 'span' }, title),
            React.createElement(Typography, { variant: 'subtitle2', component: 'span' }, subtitle),
            React.createElement(Typography, { variant: 'body1', component: 'span' }, content)),
        !temporary && action && (React.createElement(CardActions, null, action(snackbar, id, temporary)))));
};
export default DefaultNotificationCard;
