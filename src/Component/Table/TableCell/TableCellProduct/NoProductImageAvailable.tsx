import React, { CSSProperties, memo, useMemo } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';

export type NoProductImageAvailableProps = {
  onClick?: HTMLElement['click'];
}

const NoProductImageAvailable = ({ onClick = null }: NoProductImageAvailableProps) => {
  const theme = useTheme<Theme>();
  const styles: CSSProperties = useMemo(() => ({
    width: theme.spacing(10),
    height: theme.spacing(10),
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.grey['100'],
    userSelect: 'none',
    cursor: 'pointer',
  }), []);
  return <div style={styles} onClick={onClick}>No Image available</div>;
}

export default memo(NoProductImageAvailable);

