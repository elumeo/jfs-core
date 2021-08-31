import React from 'react';
import { Box, List, ListItem, Paper, Chip, ListItemIcon, ListItemText, Grid } from '@material-ui/core';
import { AccountCircle as AccountCircleIcon, ContactPhone as ContactPhoneIcon, } from '@material-ui/icons';
const Develop = () => {
    return (React.createElement(Grid, { container: true },
        React.createElement(Grid, { item: true, xs: 3 },
            React.createElement(Box, { component: Paper, m: 2 },
                React.createElement(List, { dense: true },
                    React.createElement(ListItem, { button: true, selected: true },
                        React.createElement(ListItemIcon, null,
                            React.createElement(AccountCircleIcon, null)),
                        React.createElement(ListItemText, { primary: "primary111", secondary: "secondary222" })),
                    React.createElement(ListItem, { button: true, selected: false },
                        React.createElement(ListItemIcon, null,
                            React.createElement(ContactPhoneIcon, null)),
                        React.createElement(ListItemText, { primary: "primary222", secondary: "secondary222" }))))),
        React.createElement(Grid, { item: true, xs: 3 },
            React.createElement(Box, { component: Paper, ml: 0, m: 2 },
                React.createElement(List, null,
                    React.createElement(ListItem, { button: true, selected: true },
                        React.createElement(ListItemIcon, null,
                            React.createElement(AccountCircleIcon, null)),
                        React.createElement(ListItemText, { primary: "primary111", secondary: "secondary222" })),
                    React.createElement(ListItem, { button: true, selected: false },
                        React.createElement(ListItemIcon, null,
                            React.createElement(ContactPhoneIcon, null)),
                        React.createElement(ListItemText, { primary: "primary222", secondary: "secondary222" }))))),
        React.createElement(Grid, { item: true, xs: 3 },
            React.createElement(Box, { component: Paper, ml: 0, m: 2, p: 2 },
                React.createElement(Chip, { label: "label label1", icon: React.createElement(ContactPhoneIcon, null) }),
                React.createElement(Chip, { label: "label label2", clickable: true, icon: React.createElement(AccountCircleIcon, null) }),
                React.createElement(Chip, { size: "small", label: "label label3", clickable: true, icon: React.createElement(AccountCircleIcon, null) })))));
};
export default Develop;
