import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import { Chip, Grid } from '@material-ui/core';

export type AttributesProps = {
  productType?: string;
  inStockPool?: boolean;
  hasNoTvLock?: boolean;
}

const Attributes = ({productType = null, inStockPool = false, hasNoTvLock = false}: AttributesProps) => {
  const {formatMessage} = useIntl();
  const hasChip = productType !== null || inStockPool || hasNoTvLock;
  return hasChip && <Grid container spacing={1}>
    {productType !== null && <Grid item><Chip size={'small'} label={formatMessage({id: 'product.type.' + productType})}/></Grid>}
    {inStockPool && <Grid item><Chip size={'small'} label={'StockPool'}/></Grid>}
    {hasNoTvLock && <Grid item><Chip size={'small'} label={'NoTv'}/></Grid>}
  </Grid> || <></>;
}

export default memo(Attributes);
