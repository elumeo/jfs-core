import React, { memo } from 'react';
import {Checkbox, CheckboxProps, SxProps, TableCellProps} from '@mui/material';
import Root from './Root';


const checkboxStyles: SxProps = {padding: 1};

export type Props = Partial<Omit<TableCellProps, 'onChange'>> & {
  value: string|number;
  checked: boolean;
  disabled?: boolean;
  onChange: CheckboxProps['onChange'];
  id?: CheckboxProps['id'],
  name?: CheckboxProps['name'],
}

const Select: React.FC<Props> = (
  {
    value,
    checked,
    disabled = false,
    onChange,
    id = 'table-cell-select-',
    name = 'table-cell-select[]',
    height,
    ...rest
  }
) => <Root padding='checkbox' align='center' size='small' height={height} {...rest}>
  <Checkbox
    sx={checkboxStyles}
    size={'small'}
    color={'secondary'}
    id={id + value}
    name={name}
    value={value ?? ''}
    checked={checked}
    disabled={disabled}
    onChange={onChange}
  />
</Root>;

export default memo(Select);
