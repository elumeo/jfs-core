import React, { memo, useMemo } from 'react';
import { Checkbox, CheckboxProps, CircularProgress, TableCell } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { Theme, useTheme } from '@material-ui/core/styles';

const loadingStyles: CSSProperties = { marginLeft: '12px', marginRight: '11px' };
const checkboxStyles: CSSProperties = { padding: '8px' };

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

const TableHeadSelect = ({
                           disabled = false,
                           loading = false,
                           checked,
                           height = 48,
                           onChange = null,
                           id = 'product-select-all',
                           name = 'product-select[]',
                           value = '###all###',
                           className = ''
                         }: TableHeadSelectProps) => {
  const theme = useTheme<Theme>();
  const styles: CSSProperties = useMemo(() => ({
    height: height + 'px',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(0.5),
    maxWidth: '100%'
  }), []);
  return <TableCell
    component={'div'}
    className={`virtualized-table__cell virtualized-table__flex-container virtualized-table--no-click ${className}`}
    variant={'head'}
    style={styles}
  >
    {loading && <div style={loadingStyles}><CircularProgress size={16} /></div>}
    {loading === false && <Checkbox style={checkboxStyles} size={'small'} disabled={disabled} id={id} name={name} value={value} checked={checked} onChange={onChange} />}
  </TableCell>;
};

export default memo(TableHeadSelect);
