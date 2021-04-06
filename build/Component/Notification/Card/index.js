import React from 'react';
import * as MUI from '@material-ui/core';
import { default as Default } from './Default';
import { useTheme } from '@material-ui/core';
import Icon from './Icon';
import useActions from '../../../Store/useActions';
import * as ICON from '@material-ui/icons';
import { useSnackbar } from 'notistack';
const Card = ({ children, notification, temporary }) => {
    var _a, _b, _c;
    const { palette } = useTheme();
    const { removeNotification } = useActions();
    const snackbar = useSnackbar();
    return (React.createElement(MUI.Card, { style: {
            width: '100%',
            minHeight: 'fit-content',
            backgroundColor: (_a = palette[notification.variant]) === null || _a === void 0 ? void 0 : _a['main'],
            color: (_b = palette[notification.variant]) === null || _b === void 0 ? void 0 : _b['contrastText']
        } },
        React.createElement(MUI.CardHeader, { avatar: React.createElement(Icon, { variant: notification.variant }), title: React.createElement(MUI.Typography, { component: 'h4' }, notification.title), subheader: React.createElement(MUI.Typography, { component: 'h6' }, notification.subtitle), subheaderTypographyProps: { color: 'inherit' }, action: React.createElement(MUI.CardActions, null,
                notification.action
                    ? notification.action(snackbar, notification.id, temporary)
                    : null,
                React.createElement(MUI.IconButton, { onClick: () => removeNotification(notification.id) },
                    React.createElement(ICON.Delete, { style: { color: (_c = palette[notification.variant]) === null || _c === void 0 ? void 0 : _c.contrastText } }))) }),
        React.createElement(MUI.CardContent, null,
            React.createElement(MUI.Typography, null,
                notification.content,
                children))));
};
Card.Default = Default;
Card.Icon = Icon;
export default Card;
//# sourceMappingURL=index.js.map