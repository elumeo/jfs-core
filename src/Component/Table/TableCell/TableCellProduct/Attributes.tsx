import React, { CSSProperties, memo } from 'react';
import { useIntl } from 'react-intl';
import { Chip, Grid } from '@material-ui/core';

const containerStyle: CSSProperties = {
  width: '100px',
  marginTop: '4px',
  marginLeft: '4px'
}

export type AttributesProps = {
  productType?: string;
  inStockPool?: boolean;
  hasNoTvLock?: boolean;
}

const Attributes = ({ productType = null, inStockPool = false, hasNoTvLock = false }: AttributesProps) => {
  const { formatMessage } = useIntl();
  const hasChip = productType !== null || inStockPool || hasNoTvLock;
  return hasChip && <Grid item>
    <Grid container spacing={1} style={containerStyle}>
      {productType !== null && <Grid item xs={12}><Chip size={'small'} label={formatMessage({ id: 'product.type.' + productType })} /></Grid>}
      {inStockPool && <Grid item xs={12}><Chip size={'small'} label={'StockPool'} /></Grid>}
      {hasNoTvLock && <Grid item xs={12}><Chip size={'small'} label={'NoTv'} /></Grid>}
    </Grid>
  </Grid> || <></>;
};

export default memo(Attributes);
