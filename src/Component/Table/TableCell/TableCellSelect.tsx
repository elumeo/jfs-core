import React from 'react';
import { Checkbox, CheckboxProps, SxProps } from '@mui/material';
import TableCellRoot, { TableCellRootProps } from './TableCellRoot';


const checkboxStyles: SxProps = { padding: '8px' };
const tableCellStyles: SxProps = { padding: '4px', justifyContent: 'center' };

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
    sx={tableCellStyles}
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
