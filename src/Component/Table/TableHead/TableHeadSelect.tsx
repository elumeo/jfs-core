import React from 'react';
import { Box, Checkbox, CheckboxProps, CircularProgress, SxProps, TableCell } from '@mui/material';

import definition from 'Component/App/Stateless/Style/Theme/Definition';

const loadingStyles: SxProps = { marginLeft: '12px', marginRight: '11px' };
const checkboxStyles: SxProps = { padding: '8px' };

export type TableHeadSelectProps = {
  height?: number;
  disabled?: boolean;
  loading?: boolean;
  checked: boolean;
  className?: string;
  onChange?: CheckboxProps['onChange'];
  id?: CheckboxProps['id'];
  name?: CheckboxProps['name'];
  value?: CheckboxProps['value'];
};
const getSx: SxProps = (height = 48) => ({
  height: height + 'px',
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: definition.spacing(0.5),
  maxWidth: '100%'
})
const TableHeadSelect: React.FC<TableHeadSelectProps> = ({
  disabled = false,
  loading = false,
  checked,
  height = 48,
  onChange = null,
  id = 'product-select-all',
  name = 'product-select[]',
  value = '###all###',
  className = ''
}) => (
  <TableCell
    component={'div'}
    className={`virtualized-table__cell virtualized-table__flex-container virtualized-table--no-click ${className}`}
    variant={'head'}
    sx={getSx(height)}>
    {
      loading
        ? (
          <Box sx={loadingStyles}>
            <CircularProgress size={16} />
          </Box>
        )
        : (
          <Checkbox
            sx={checkboxStyles}
            size={'small'}
            disabled={disabled}
            id={id}
            name={name}
            value={value}
            checked={checked}
            onChange={onChange} />
        )

    }
  </TableCell>
)


export default TableHeadSelect
