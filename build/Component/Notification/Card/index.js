import React from 'react';
import * as MUI from '@material-ui/core';
// import DefaultNotificationCard from './Default';
import { default as Default } from './Default';
import { useTheme } from '@material-ui/core';
import Icon from './Icon';
const Card = ({ children, actions, notification: { variant, title, subtitle, content } }) => {
    var _a, _b;
    const { palette } = useTheme();
    console.log('test log', { palette, children });
    return (React.createElement(MUI.Card, { style: {
            width: '100%',
            maxHeight: '100%',
            minHeight: 'fit-content',
            backgroundColor: (_a = palette[variant]) === null || _a === void 0 ? void 0 : _a['main'],
            color: (_b = palette[variant]) === null || _b === void 0 ? void 0 : _b['contrastText']
        } },
        React.createElement(MUI.CardHeader, { avatar: React.createElement(Icon, { variant: variant }), title: React.createElement(MUI.Typography, { component: 'h4' }, title), subheader: React.createElement(MUI.Typography, { component: 'h6' }, subtitle), subheaderTypographyProps: { color: 'inherit' }, action: actions && React.createElement(MUI.CardActions, null, actions) }),
        React.createElement(MUI.CardContent, null,
            React.createElement(MUI.Typography, null,
                content,
                children))));
};
Card.Default = Default;
Card.Icon = Icon;
export default Card;
//# sourceMappingURL=index.js.map