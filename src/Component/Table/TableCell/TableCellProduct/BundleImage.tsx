import React, { CSSProperties, memo, useMemo } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';

export type BundleImageProps = {
  onClick?: HTMLElement['click'];
}

const BundleImage = ({onClick = null}: BundleImageProps) => {
  const theme = useTheme<Theme>();
  const bundleBoxStyles: CSSProperties = useMemo(() => ({
    width: theme.spacing(10),
    height: theme.spacing(10),
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.grey['100'],
    userSelect: 'none',
    cursor: 'pointer',
  }), []);
  return <div style={bundleBoxStyles} onClick={onClick}>Product Bundle</div>;
}

export default memo(BundleImage);
