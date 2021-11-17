import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import { Button, Chip, Grid, Typography } from '@material-ui/core';
import { TableCellRoot, TableCellLoadingContent } from './';

export type TableCellProductBaseProps = {
  id?: string;
  mediaUri?: string;
  name?: string;
  productType?: string;
  inStockPool?: boolean;
  hasNoTvLock?: boolean;
  isProductBundle?: boolean;
  bundleProductIds?: string[];
  className?: string;
  onClick: (productIds: string[]) => void
}

const TableCellProductBase = ({
                                id = null,
                                mediaUri = null,
                                name = null,
                                productType = null,
                                inStockPool = false,
                                hasNoTvLock = false,
                                isProductBundle = false,
                                bundleProductIds = [],
                                className,
                                onClick
                              }: TableCellProductBaseProps) => {
  const { formatMessage } = useIntl();
  const hasChip = productType !== null || inStockPool || hasNoTvLock;

  let productImage;
  if (isProductBundle) {
    productImage = <div className={'virtualized-table__bundle-box'} onClick={() => onClick(bundleProductIds)}>
      Product Bundle
    </div>;
  } else if (id !== null && mediaUri !== null) {
    productImage = <img src={mediaUri} alt={id} className={'virtualized-table__link'} onClick={() => onClick([id])} />;
  }
  return <TableCellRoot>
    {id && <Grid container className={className}>
      <Grid item className={'virtualized-table__product-image-wrapper'}>{productImage}</Grid>
      <Grid item xs>
        <div className={'virtualized-table__name-outer-wrapper'}>
          <div className={'virtualized-table__name-inner-wrapper'}>
            <Typography variant={'body1'} className={'virtualized-table__name'}>{name}</Typography>
          </div>
          {hasChip && <Grid container spacing={1}>
            {productType !== null && <Grid item><Chip size={'small'} label={formatMessage({ id: 'product.type.' + productType })} /></Grid>}
            {inStockPool && <Grid item><Chip size={'small'} label={'StockPool'} /></Grid>}
            {hasNoTvLock && <Grid item><Chip size={'small'} label={'NoTv'} /></Grid>}
          </Grid>}
          <div style={{ marginTop: '2px' }}>
            {id && (
              <Button size={'small'} color={'secondary'} onClick={() => onClick(isProductBundle ? bundleProductIds : [id])}>
                {formatMessage({ id: 'product.details' })}
              </Button>
            )}
          </div>
        </div>
      </Grid>
    </Grid>}
    {id === null && <TableCellLoadingContent />}
  </TableCellRoot>;
};

export default memo(TableCellProductBase);

