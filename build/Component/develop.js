import React from 'react';
import { Box, List, ListItem, Paper, Chip, ListItemIcon, ListItemText, Grid, Button } from '@material-ui/core';
import { AccountCircle as AccountCircleIcon, ContactPhone as ContactPhoneIcon } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import { getCurrency } from '../Utilities/Format/Currency';
import { useDispatch } from 'react-redux';
import * as Action from '../Store/Action';
import { v4 as uuid } from 'uuid';
const Develop = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    return (React.createElement(Box, null,
        React.createElement(Button, { onClick: () => dispatch(Action.addNotification({
                id: uuid(),
                title: 'Error',
                subtitle: 'Join Room (action.payload.name)',
                content: 'MESSAGE',
                variant: 'error',
            })) }, "Notification"),
        React.createElement(Grid, { container: true },
            React.createElement(Grid, { item: true }, getCurrency('EUR', 100, true)),
            React.createElement(Grid, { item: true }, getCurrency('EUR', 100.5, true)),
            React.createElement(Grid, { item: true }, getCurrency('EUR', 100.75, true)),
            React.createElement(Grid, { item: true }, getCurrency('EUR', 100.50, true))),
        React.createElement(Grid, { container: true },
            React.createElement(Grid, { item: true },
                React.createElement(Box, { p: 2, m: 2, style: { backgroundColor: theme.palette.info.main, color: theme.palette.getContrastText(theme.palette.info.main) } }, "Info")),
            React.createElement(Grid, { item: true },
                React.createElement(Box, { p: 2, m: 2, style: { backgroundColor: theme.palette.error.main, color: theme.palette.getContrastText(theme.palette.error.main) } }, "Error")),
            React.createElement(Grid, { item: true },
                React.createElement(Box, { p: 2, m: 2, style: { backgroundColor: theme.palette.warning.main, color: theme.palette.getContrastText(theme.palette.warning.main) } }, "Warning")),
            React.createElement(Grid, { item: true },
                React.createElement(Box, { p: 2, m: 2, style: { backgroundColor: theme.palette.success.main, color: theme.palette.getContrastText(theme.palette.success.main) } }, "Success"))),
        React.createElement(Grid, { container: true },
            React.createElement(Grid, { item: true, xs: 3 },
                React.createElement(Box, { component: Paper, m: 2 },
                    React.createElement(List, { dense: true },
                        React.createElement(ListItem, { button: true, selected: true },
                            React.createElement(ListItemIcon, null,
                                React.createElement(AccountCircleIcon, null)),
                            React.createElement(ListItemText, { primary: 'primary111', secondary: 'secondary222' })),
                        React.createElement(ListItem, { button: true, selected: false },
                            React.createElement(ListItemIcon, null,
                                React.createElement(ContactPhoneIcon, null)),
                            React.createElement(ListItemText, { primary: 'primary222', secondary: 'secondary222' }))))),
            React.createElement(Grid, { item: true, xs: 3 },
                React.createElement(Box, { component: Paper, ml: 0, m: 2 },
                    React.createElement(List, null,
                        React.createElement(ListItem, { button: true, selected: true },
                            React.createElement(ListItemIcon, null,
                                React.createElement(AccountCircleIcon, null)),
                            React.createElement(ListItemText, { primary: 'primary111', secondary: 'secondary222' })),
                        React.createElement(ListItem, { button: true, selected: false },
                            React.createElement(ListItemIcon, null,
                                React.createElement(ContactPhoneIcon, null)),
                            React.createElement(ListItemText, { primary: 'primary222', secondary: 'secondary222' }))))),
            React.createElement(Grid, { item: true, xs: 3 },
                React.createElement(Box, { component: Paper, ml: 0, m: 2, p: 2 },
                    React.createElement(Chip, { label: 'label label1', icon: React.createElement(ContactPhoneIcon, null) }),
                    React.createElement(Chip, { label: 'label label2', clickable: true, icon: React.createElement(AccountCircleIcon, null) }),
                    React.createElement(Chip, { size: 'small', label: 'label label3', clickable: true, icon: React.createElement(AccountCircleIcon, null) }))))));
};
export default Develop;
