import React from 'react';
import { Box, Card, CardContent, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import WarningIcon from '@material-ui/icons/Warning';
const sample = [
    ['Frozen yoghurt', 159, 6.0, 24, 4.0],
    ['Ice cream sandwich', 237, 9.0, 37, 4.3],
    ['Eclair', 262, 16.0, 24, 6.0],
    ['Cupcake', 305, 3.7, 67, 4.3],
    ['Gingerbread', 356, 16.0, 49, 3.9],
];
function createData(id, dessert, calories, fat, carbs, protein) {
    return { id, dessert, calories, fat, carbs, protein };
}
const rows = [];
for (let i = 0; i < 200; i += 1) {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    rows.push(createData(i, ...randomSelection));
}
const variants = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'button',
    'caption',
    'overline',
];
const Develop = () => {
    const theme = useTheme();
    return React.createElement(Box, null,
        React.createElement(Box, null,
            React.createElement(Container, null,
                React.createElement(Card, null,
                    React.createElement(CardContent, null, variants.map((variant) => React.createElement(Box, { key: variant },
                        React.createElement(Typography, { variant: variant },
                            "variant='",
                            variant,
                            "'"))))),
                React.createElement(List, null,
                    React.createElement(ListItem, null,
                        React.createElement(ListItemIcon, null,
                            React.createElement(WarningIcon, null)),
                        React.createElement(ListItemText, null, "Text"))))));
};
export default Develop;
