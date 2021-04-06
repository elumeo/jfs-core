import React from 'react';
import * as MUI from '@material-ui/core';
import { useSnackbar } from 'notistack';
const DefaultNotificationCard = ({ notification: { title, subtitle, content, action, id }, temporary }) => {
    const snackbar = useSnackbar();
    return (React.createElement(React.Fragment, null,
        React.createElement(MUI.CardContent, { color: 'inherit' },
            React.createElement(MUI.Typography, { variant: 'subtitle1' }, title),
            React.createElement(MUI.Typography, { variant: 'subtitle2' }, subtitle),
            React.createElement(MUI.Typography, { variant: 'caption' }, content)),
        !temporary && action && (React.createElement(MUI.CardActions, null, action(snackbar, id, temporary)))));
};
export default DefaultNotificationCard;
//# sourceMappingURL=Default.js.map