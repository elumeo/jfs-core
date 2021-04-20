import React from 'react';
import MUISelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import All from './All.json';
const Select = ({ value, onChange }) => (React.createElement(MUISelect, { id: 'settings__language-select', variant: 'standard', fullWidth: true, value: value, onChange: event => onChange(event.target.value) }, All.map(item => (React.createElement(MenuItem, { value: item.value, key: 'language' + item.value }, item.label)))));
export default Select;
