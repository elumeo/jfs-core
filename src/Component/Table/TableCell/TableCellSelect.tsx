import React from 'react';
import { Checkbox, CheckboxProps, SxProps } from '@mui/material';
import TableCellRoot, { TableCellRootProps } from './TableCellRoot';


const checkboxStyles: SxProps = { padding: 1 };

export type TableCellSelectProps = Partial<TableCellRootProps> & {
  value: string;
  checked: boolean;
  disabled?: boolean;
  onChange: CheckboxProps['onChange'];
  id?: CheckboxProps['id'],
  name?: CheckboxProps['name'],
}

const TableCellSelect: React.FC<TableCellSelectProps> = (
  {
    value,
    checked,
    disabled = false,
    onChange,
    id = 'table-cell-select-',
    name = 'table-cell-select[]',
    height
  }
) => (
  <TableCellRoot
    padding='checkbox'
    align='center'
    size='small'
    height={height}>
    <Checkbox
      sx={checkboxStyles}
      size={'small'}
      id={id + value}
      name={name}
      value={value ?? ''}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  </TableCellRoot>
)

export default TableCellSelect
