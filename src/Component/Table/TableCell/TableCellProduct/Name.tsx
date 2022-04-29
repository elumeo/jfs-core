import React, { CSSProperties, memo, useMemo } from 'react';
import { Typography } from '@mui/material';
import theme from 'Component/App/Stateless/Style/Theme/Definition';

const nameWrapperStyles: CSSProperties = {flex: 1};

export type NameProps = {
  name: string;
  productType?: string;
  inStockPool?: boolean;
  hasNoTvLock?: boolean;
}

const Name = ({name, productType = null, inStockPool = false, hasNoTvLock = false}: NameProps) => {

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
