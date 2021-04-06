import React from 'react';
import * as MUI from '@material-ui/core';
import All from './All.json';
import { Language } from 'Types/Language';

export type Props = {
  value: Language;
  onChange: (next: Language) => void;
};

const Select: React.FC<Props> = ({ value, onChange }) => (
  <MUI.Select
    id='settings__language-select'
    variant='standard'
    fullWidth
    value={value}
    onChange={event => onChange(event.target.value as Language)}>
    {All.map(item => (
      <MUI.MenuItem value={item.value}>
        {item.label}
      </MUI.MenuItem>
    ))}
  </MUI.Select>
);

export default Select;
