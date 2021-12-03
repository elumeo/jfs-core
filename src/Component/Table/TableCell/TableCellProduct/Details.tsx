import React, { CSSProperties, memo, useMemo } from 'react';
import { Grid } from '@material-ui/core';
import { Theme, useTheme } from '@material-ui/core/styles';
import Attributes from './Attributes';
import Name from './Name';
import Button from './Button';

export type DetailsProps = {
  id?: string;
  name?: string;
  productType?: string;
  inStockPool?: boolean;
  hasNoTvLock?: boolean;
  onClick?: HTMLElement['click'];
}

const Details = ({ id = null, name = null, productType = null, inStockPool = false, hasNoTvLock = false, onClick = null }: DetailsProps) => {
  const theme = useTheme<Theme>();
  const outerWrapperStyles: CSSProperties = useMemo(() => ({ marginLeft: theme.spacing(1), display: 'flex', flexDirection: 'column', height: '100%' }), []);

  return <Grid item xs>
    <div style={outerWrapperStyles}>
      <Name name={name} productType={productType} hasNoTvLock={hasNoTvLock} inStockPool={inStockPool} />
      <Attributes productType={productType} hasNoTvLock={hasNoTvLock} inStockPool={inStockPool} />
      <Button onClick={onClick} id={id} />
    </div>
  </Grid>;
};

export default memo(Details);
