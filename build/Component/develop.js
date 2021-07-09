import React from 'react';
import { Box, Container } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import PriceField from './PriceInput/PriceField';
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
                React.createElement(PriceField, { value: 1000 }))));
};
export default Develop;
