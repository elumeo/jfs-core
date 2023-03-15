import React from 'react';
import {Box, Checkbox, CheckboxProps, CircularProgress, SxProps, TableCell, TableCellProps} from '@mui/material';

const loadingStyles: SxProps = {ml: 1.5, mr: 1.5};
const checkboxStyles: SxProps = {p: 0};

export type Props = TableCellProps & {
  disabled?: boolean;
  loading?: boolean;
  checked: boolean;
  onChange?: CheckboxProps['onChange'];
  id: CheckboxProps['id'];
  name: CheckboxProps['name'];
  value: CheckboxProps['value'];
};
const Select: React.FC<Props> = ({disabled = false, loading = false, checked, onChange = null, id, name, value, ...rest}) => (
  <TableCell variant={'head'} {...rest}>
    {loading
      ? <Box sx={loadingStyles}><CircularProgress size={16}/></Box>
      : <Checkbox
        sx={checkboxStyles}
        size={'small'}
        disabled={disabled}
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}/>
    }
  </TableCell>
)


export default Select;
