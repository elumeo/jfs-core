import React, { memo, useMemo } from 'react';
import { CircularProgress } from '@mui/material';
import { CSSProperties } from '@mui/styles/withStyles';
import definition from 'Component/App/Stateless/Style/Theme/Definition';

const TableRowLoading = () => {
  const styles = useMemo<CSSProperties>(() => ({ textAlign: 'center', marginTop: definition.spacing(2) + 'px' }), []);
  return <div style={styles}><CircularProgress /></div>;
};

export default memo(TableRowLoading);
