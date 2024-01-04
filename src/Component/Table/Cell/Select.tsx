import React, { memo } from 'react';
import { Checkbox, CheckboxProps, TableCellProps } from '@mui/material';
import Root from './Root';


export type Props = Partial<Omit<TableCellProps, 'onChange'>> & {
  value: string | number;
  checked: boolean;
  disabled?: boolean;
  onChange: CheckboxProps['onChange'];
  id?: CheckboxProps['id'],
  name?: CheckboxProps['name'],
  slotProps?: {
    checkbox?: CheckboxProps;
  }
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
    slotProps,
    ...rest
  }
) => <Root padding='none' align='center' size='small' height={height} {...rest}>
    <Checkbox
      size={'small'}
      color={'secondary'}
      id={id + value}
      name={name}
      value={value ?? ''}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      {...slotProps?.checkbox}
    />
  </Root>;

export default memo(Select);
