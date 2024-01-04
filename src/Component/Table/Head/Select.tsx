import React, { memo } from 'react';
import { Box, Checkbox, CheckboxProps, CircularProgress, SxProps, TableCell, TableCellProps } from '@mui/material';

const loadingStyles: SxProps = { ml: 1.5, mr: 1.5 };

export type Props = Omit<TableCellProps, 'onChange'> & {
  disabled?: boolean;
  loading?: boolean;
  checked: boolean;
  onChange?: CheckboxProps['onChange'];
  id: CheckboxProps['id'];
  name: CheckboxProps['name'];
  value: CheckboxProps['value'];
  slotProps?: {
    checkbox?: CheckboxProps;
  }
};
const Select: React.FC<Props> = ({ disabled = false, loading = false, checked, onChange = null, id, name, value, slotProps, ...rest }) => (
  <TableCell variant={'head'} padding='none' {...rest}>
    {loading
      ? <Box sx={loadingStyles}><CircularProgress size={16} /></Box>
      : <Checkbox
        color={'secondary'}
        size={'small'}
        disabled={disabled}
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        {...slotProps?.checkbox} />
    }
  </TableCell>
)


export default memo(Select);
