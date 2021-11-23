import React, { memo, useMemo } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useTheme, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const TableRowLoading = () => {
  const theme = useTheme<Theme>();
  const styles = useMemo<CSSProperties>(() => ({ textAlign: 'center', marginTop: theme.spacing(2) + 'px' }), []);
  return <div style={styles}><CircularProgress /></div>;
};

export default memo(TableRowLoading);
