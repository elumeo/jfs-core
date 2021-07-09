import React from 'react';
import { Box, Paper, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardDateTimePicker, KeyboardTimePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
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
    'overline'
];
const Develop = () => {
    const theme = useTheme();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return React.createElement(Box, null,
        React.createElement(Box, { component: Paper, p: 2 },
            React.createElement(MuiPickersUtilsProvider, { utils: DateFnsUtils },
                React.createElement(Grid, { container: true, spacing: 1 },
                    React.createElement(Grid, { item: true },
                        React.createElement(KeyboardDatePicker, { disableToolbar: true, variant: 'inline', format: 'dd/MM/yyyy', id: 'date-picker-inline', label: 'Date picker inline', value: selectedDate, onChange: (date) => handleDateChange(date), KeyboardButtonProps: {
                                'aria-label': 'change date'
                            } })),
                    React.createElement(Grid, { item: true },
                        React.createElement(KeyboardTimePicker, { ampm: false, id: 'time-picker', label: 'Time picker', value: selectedDate, onChange: (date) => handleDateChange(date), KeyboardButtonProps: {
                                'aria-label': 'change time'
                            } })),
                    React.createElement(Grid, { item: true },
                        React.createElement(KeyboardDateTimePicker
                        // disableToolbar
                        , { 
                            // disableToolbar
                            ampm: false, variant: 'inline', format: 'dd/MM/yyyy HH:mm', id: 'date-picker-inline', label: 'Datetime picker inline', value: selectedDate, onChange: (date) => handleDateChange(date), KeyboardButtonProps: {
                                'aria-label': 'change date and time',
                            } }))))));
};
export default Develop;
