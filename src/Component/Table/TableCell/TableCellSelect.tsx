import React, { memo } from 'react';
import { Checkbox, CheckboxProps } from '@material-ui/core';
import TableCellRoot from './TableCellRoot';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const checkboxStyles: CSSProperties = { padding: '7px' };

export type TableCellSelectProps = {
  value: string;
  checked: boolean;
  disabled?: boolean;
  onChange: CheckboxProps['onChange'];
  id?: CheckboxProps['id'],
  name?: CheckboxProps['name'],
}

const TableCellSelect = ({ value, checked, disabled = false, onChange, id = 'table-cell-select-', name = 'table-cell-select[]' }: TableCellSelectProps) => <TableCellRoot>
  <Checkbox style={checkboxStyles} size={'small'} id={id + value} name={name} value={value ?? ''} checked={checked} disabled={disabled} onChange={onChange} />
</TableCellRoot>;

export default memo(TableCellSelect);
