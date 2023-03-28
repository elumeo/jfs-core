import React from 'react';
import MUISelect from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import All from './All.json';
import { Language } from 'Types/Language';

export type Props = {
  value: Language;
  onChange: (next: Language) => void;
};

const Select: React.FC<Props> = ({ value, onChange }) => (
  <MUISelect
    id='settings__language-select'
    fullWidth
    value={value}
    onChange={event => onChange(event.target.value as Language)}>
    {All.map(item => (
      <MenuItem value={item.value} key={'language' + item.value}>
        {item.label}
      </MenuItem>
    ))}
  </MUISelect>
);

export default Select;
