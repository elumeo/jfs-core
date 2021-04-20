import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { useSnackbar } from 'notistack';
const DefaultNotificationCard = ({ notification: { title, subtitle, content, action, id }, temporary }) => {
    const snackbar = useSnackbar();
    return (React.createElement(React.Fragment, null,
        React.createElement(CardContent, { color: 'inherit' },
            React.createElement(Typography, { variant: 'subtitle1' }, title),
            React.createElement(Typography, { variant: 'subtitle2' }, subtitle),
            React.createElement(Typography, { variant: 'caption' }, content)),
        !temporary && action && (React.createElement(CardActions, null, action(snackbar, id, temporary)))));
};
export default DefaultNotificationCard;
