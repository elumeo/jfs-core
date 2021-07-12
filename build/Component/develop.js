import React from 'react';
import { Box, Card, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
export const getAppBarHeight = (theme) => (parseInt(theme.mixins.toolbar.minHeight.toString()) + theme.spacing(2));
const useStyles = makeStyles(theme => ({
    root: {
        height: 'calc(100% - ' + getAppBarHeight(theme) + 'px)',
        width: 'calc(100% - ' + theme.spacing(2) + 'px)',
        margin: theme.spacing(1),
    },
    menu: {
        width: theme.spacing(50),
    },
}));
const Develop = () => {
    const classes = useStyles();
    return React.createElement(Grid, { container: true, className: classes.root },
        React.createElement(Grid, { item: true, className: classes.menu },
            React.createElement(Card, null,
                React.createElement(List, { dense: true },
                    React.createElement(ListItem, null,
                        React.createElement(ListItemText, null, "Navi 1")),
                    React.createElement(ListItem, null,
                        React.createElement(ListItemText, null, "Navi 2")),
                    React.createElement(ListItem, null,
                        React.createElement(ListItemText, null, "Navi 3")),
                    React.createElement(ListItem, null,
                        React.createElement(ListItemText, null, "Navi 4"))))),
        React.createElement(Grid, { item: true, xs: true },
            React.createElement(Box, { ml: 1 },
                React.createElement(Box, { component: Card, height: '100%' }, "Content"))));
};
export default Develop;
