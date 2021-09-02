import React from 'react';
import MUICard from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { default as Default } from './Default';
import { useTheme } from '@material-ui/core/styles';
import Icon from './Icon';
import useActions from '../../../Store/useActions';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSnackbar } from 'notistack';
import { useIntl } from 'react-intl';
const Card = ({ children, notification, temporary }) => {
    var _a, _b, _c;
    const { palette } = useTheme();
    const { removeNotification } = useActions();
    const snackbar = useSnackbar();
    const { formatMessage } = useIntl();
    return (React.createElement(MUICard, { style: {
            width: '100%',
            minHeight: 'fit-content',
            backgroundColor: (_a = palette[notification.variant]) === null || _a === void 0 ? void 0 : _a['main'],
            color: (_b = palette[notification.variant]) === null || _b === void 0 ? void 0 : _b['contrastText'],
        } },
        React.createElement(CardHeader, { avatar: React.createElement(Icon, { variant: notification.variant }), title: React.createElement(Typography, { variant: 'h6', component: 'div' }, (notification === null || notification === void 0 ? void 0 : notification.isTranslationId)
                ? formatMessage({ id: notification.title })
                : notification.title), subheader: React.createElement(Typography, { variant: 'subtitle1', component: 'div' }, (notification === null || notification === void 0 ? void 0 : notification.isTranslationId)
                ? formatMessage({ id: notification.subtitle })
                : notification.subtitle), subheaderTypographyProps: { color: 'inherit' }, action: React.createElement(CardActions, null,
                notification.action
                    ? notification.action(snackbar, notification.id, temporary)
                    : null,
                React.createElement(IconButton, { onClick: () => removeNotification(notification.id) },
                    React.createElement(DeleteIcon, { style: {
                            color: (_c = palette[notification.variant]) === null || _c === void 0 ? void 0 : _c.contrastText,
                        } }))) }),
        React.createElement(Box, { component: CardContent, pt: 0 },
            React.createElement(Typography, { variant: 'body2', component: 'div' },
                (notification === null || notification === void 0 ? void 0 : notification.isTranslationId)
                    ? formatMessage({ id: notification.content })
                    : notification.content,
                children))));
};
Card.Default = Default;
Card.Icon = Icon;
export default Card;
