import React, { useState } from 'react';
import { Box, Grid, Paper, TextField } from '@material-ui/core';
import DatePicker from './DatePicker';
const Develop = () => {
    const [simpleDatePickerValue, setSimpleDatePickerValue] = useState(null);
    const [demoTextFieldValue, setDemoTextFieldValue] = useState('');
    return React.createElement(Box, { component: Paper, p: 2 },
        React.createElement(Grid, { container: true, spacing: 1 },
            React.createElement(Grid, { item: true },
                React.createElement(DatePicker, { onChange: date => setSimpleDatePickerValue(date), value: simpleDatePickerValue })),
            React.createElement(Grid, { item: true },
                React.createElement(TextField, { value: demoTextFieldValue, onChange: event => setDemoTextFieldValue(event.target.value), label: 'Label' }))));
};
export default Develop;
