import React, { CSSProperties, memo, useMemo } from 'react';
import { Typography } from '@material-ui/core';
import { Theme, useTheme } from '@material-ui/core/styles';

const nameWrapperStyles: CSSProperties = {flex: 1};

export type NameProps = {
  name: string;
  productType?: string;
  inStockPool?: boolean;
  hasNoTvLock?: boolean;
}

const Name = ({name, productType = null, inStockPool = false, hasNoTvLock = false}: NameProps) => {
  const theme = useTheme<Theme>();
  const nameStyles: CSSProperties = useMemo(() => ({
    fontWeight: theme.typography.fontWeightBold,
    whiteSpace: 'normal',
    display: '-webkit-box',
    overflow: 'hidden',
    boxOrient: 'vertical',
    lineClamp: productType !== null || inStockPool || hasNoTvLock ? 2 : 3,
  }), [productType, inStockPool, hasNoTvLock]);

  return <div style={nameWrapperStyles}>
    <Typography variant={'body1'} style={nameStyles}>{name}</Typography>
  </div>;
}

export default memo(Name);
