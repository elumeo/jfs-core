import React from 'react';
import { Box, CircularProgress, Paper } from '@material-ui/core';
import { VirtualizedTable } from './Table';
import 'date-fns';
const sample = [
    ['Frozen yoghurt', 159, 6.0, 24, 4.0],
    ['Ice cream sandwich', 237, 9.0, 37, 4.3],
    ['Eclair', 262, 16.0, 24, 6.0],
    ['Cupcake', 305, 3.7, 67, 4.3],
    ['Gingerbread', 356, 16.0, 49, 3.9]
];
function createData(id, dessert, calories, fat, carbs, protein) {
    return { id, dessert, calories, fat, carbs, protein };
}
const rows = [];
for (let i = 0; i < 200; i += 1) {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    rows.push(createData(i, ...randomSelection));
}
const Develop = () => {
    return React.createElement(Box, { component: Paper },
        React.createElement(CircularProgress, null),
        React.createElement(CircularProgress, { color: 'primary' }),
        React.createElement(CircularProgress, { color: 'secondary' }),
        React.createElement(Box, { padding: 1, height: '100%' },
            React.createElement(VirtualizedTable, { showRowHoverHighlight: true, rowCount: rows.length, rowGetter: (row) => rows[row.index], sortBy: 'dessert', sortDirection: 'ASC', sort: () => console.log('sorting'), 
                // rowHeight={100}
                columns: [
                    {
                        width: 200,
                        flexGrow: 1,
                        label: 'Dessert',
                        dataKey: 'dessert',
                        disableSort: false
                    },
                    {
                        width: 120,
                        label: 'Calories (g)',
                        dataKey: 'calories',
                        numeric: true,
                    },
                    {
                        width: 120,
                        label: 'Fat (g)',
                        dataKey: 'fat',
                        numeric: true,
                    },
                    {
                        width: 120,
                        label: 'Carbs (g)',
                        dataKey: 'carbs',
                        numeric: true,
                    },
                    {
                        width: 120,
                        label: 'Protein (g)',
                        dataKey: 'protein',
                        numeric: true,
                    },
                ] })));
};
export default Develop;
