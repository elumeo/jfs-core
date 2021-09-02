/* eslint-disable max-lines */
import React from 'react';
import { Box, List, ListItem, Paper, Chip, ListItemIcon, ListItemText, Grid, Button, CardContent, Card, Table, TableHead, TableContainer, TableRow, TableCell, TableBody } from '@material-ui/core';
import { AccountCircle as AccountCircleIcon, ContactPhone as ContactPhoneIcon } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';
import { getCurrency } from '../Utilities/Format/Currency';
import { useDispatch } from 'react-redux';
import * as Action from '../Store/Action';
import { v4 as uuid } from 'uuid';
import { VirtualizedTable } from './Table';
const sample = [
    ['Frozen yoghurt', 159, 6.0, 24, 4.0],
    ['Ice cream sandwich', 237, 9.0, 37, 4.3],
    ['Eclair', 262, 16.0, 24, 6.0],
    ['Cupcake', 305, 3.7, 67, 4.3],
    ['Gingerbread', 356, 16.0, 49, 3.9]
];
const createDataVirtualizedTable = (id, dessert, calories, fat, carbs, protein) => ({ id, dessert, calories, fat, carbs, protein });
const rows = [];
for (let i = 0; i < 200; i += 1) {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    rows.push(createDataVirtualizedTable(i, ...randomSelection));
}
const Develop = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    return (React.createElement(Box, null,
        React.createElement(Button, { onClick: () => dispatch(Action.addNotification({
                id: uuid(),
                title: 'Error',
                subtitle: 'Join Room (action.payload.name)',
                content: 'MESSAGE',
                variant: 'error'
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
                    React.createElement(Chip, { size: 'small', label: 'label label3', clickable: true, icon: React.createElement(AccountCircleIcon, null) })))),
        React.createElement(Box, { m: 1 },
            React.createElement(Card, null,
                React.createElement(CardContent, { style: { height: 300 } },
                    React.createElement(TableContainer, { style: { maxHeight: 300 } },
                        React.createElement(Table, { stickyHeader: true },
                            React.createElement(TableHead, null,
                                React.createElement(TableRow, null, ['calories', 'carbs', 'dessert', 'fat', 'id', 'protein'].map((column, index) => React.createElement(TableCell, { key: 'column-head-index-' + index }, column)))),
                            React.createElement(TableBody, null, rows.map((row, index) => React.createElement(TableRow, { key: 'row-body-index' + index },
                                React.createElement(TableCell, null, row.calories),
                                React.createElement(TableCell, null, row.carbs),
                                React.createElement(TableCell, null, row.dessert),
                                React.createElement(TableCell, null, row.fat),
                                React.createElement(TableCell, null, row.id),
                                React.createElement(TableCell, null, row.protein))))))))),
        React.createElement(Box, { m: 1 },
            React.createElement(Card, null,
                React.createElement(CardContent, { style: { height: 300 } },
                    React.createElement(VirtualizedTable, { rowHeight: 50, rowCount: rows.length, rowGetter: (row) => rows[row.index], sortBy: 'calories', sortDirection: 'ASC', columns: [
                            {
                                width: 200,
                                flexGrow: 1,
                                label: 'Dessert (100g serving)',
                                dataKey: 'dessert',
                                disableSort: true
                            },
                            {
                                width: 120,
                                label: 'Calories\u00A0(g)',
                                dataKey: 'calories',
                                numeric: true
                            },
                            {
                                width: 120,
                                label: 'Fat\u00A0(g)',
                                dataKey: 'fat',
                                numeric: true
                            },
                            {
                                width: 120,
                                label: 'Carbs\u00A0(g)',
                                dataKey: 'carbs',
                                numeric: true
                            },
                            {
                                width: 120,
                                label: 'Protein\u00A0(g)',
                                dataKey: 'protein',
                                numeric: true
                            }
                        ] }))))));
};
export default Develop;
