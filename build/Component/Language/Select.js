import React from 'react';
import * as MUI from '@material-ui/core';
import All from './All.json';
const Select = ({ value, onChange }) => (React.createElement(MUI.Select, { id: 'settings__language-select', variant: 'standard', fullWidth: true, value: value, onChange: event => onChange(event.target.value) }, All.map(item => (React.createElement(MUI.MenuItem, { value: item.value, key: 'language' + item.value }, item.label)))));
export default Select;
//# sourceMappingURL=Select.js.map