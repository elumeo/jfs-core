import React, { memo } from 'react';
import { Checkbox, CheckboxProps } from '@material-ui/core';
import TableCellRoot, { TableCellRootProps } from './TableCellRoot';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const checkboxStyles: CSSProperties = { padding: '8px' };
const tableCellStyles: CSSProperties = { padding: '4px' };

export type TableCellSelectProps = Partial<TableCellRootProps> & {
  value: string;
  checked: boolean;
  disabled?: boolean;
  onChange: CheckboxProps['onChange'];
  id?: CheckboxProps['id'],
  name?: CheckboxProps['name'],
}

const TableCellSelect = ({
                           value,
                           checked,
                           disabled = false,
                           onChange,
                           id = 'table-cell-select-',
                           name = 'table-cell-select[]',
                           height
                         }: TableCellSelectProps) => <TableCellRoot styles={tableCellStyles} height={height}>
  <Checkbox style={checkboxStyles} size={'small'} id={id + value} name={name} value={value ?? ''} checked={checked} disabled={disabled} onChange={onChange} />
</TableCellRoot>;

export default memo(TableCellSelect);
