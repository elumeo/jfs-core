import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import { Chip, Divider, Grid } from '@material-ui/core';

export type AttributesProps = {
  productType?: string;
  inStockPool?: boolean;
  hasNoTvLock?: boolean;
}

const Attributes = ({ productType = null, inStockPool = false, hasNoTvLock = false }: AttributesProps) => {
  const { formatMessage } = useIntl();
  const hasChip = productType !== null || inStockPool || hasNoTvLock;
  return hasChip && <Grid item>
    <Grid container spacing={2} style={{marginTop: 0, marginLeft: '4px', height: '100%'}} wrap={'nowrap'}>
      <Divider orientation="vertical" flexItem style={{marginTop: '8px', marginBottom: '8px'}} />
      <Grid item>
        <Grid container spacing={1} style={{width: '100px'}}>
          {productType !== null && <Grid item xs={12}><Chip size={'small'} label={formatMessage({ id: 'product.type.' + productType })} /></Grid>}
          {inStockPool && <Grid item xs={12}><Chip size={'small'} label={'StockPool'} /></Grid>}
          {hasNoTvLock && <Grid item xs={12}><Chip size={'small'} label={'NoTv'} /></Grid>}
        </Grid>
      </Grid>
    </Grid>
  </Grid> || <></>;
};

export default memo(Attributes);
