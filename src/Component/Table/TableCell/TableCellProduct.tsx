import React, { memo, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { Button, Chip, Grid, Theme, Typography } from '@material-ui/core';
import { TableCellRoot, TableCellLoadingContent } from './';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { useTheme } from '@material-ui/styles';
import { TableCellRootProps } from 'Component/Table/TableCell/TableCellRoot';

export type TableCellProductProps = Partial<TableCellRootProps> & {
  id?: string;
  mediaUri?: string;
  name?: string;
  productType?: string;
  inStockPool?: boolean;
  hasNoTvLock?: boolean;
  isProductBundle?: boolean;
  bundleProductIds?: string[];
  onClick?: (productIds: string[]) => void
}

const TableCellProduct = ({
                            id = null,
                            mediaUri = null,
                            name = null,
                            productType = null,
                            inStockPool = false,
                            hasNoTvLock = false,
                            isProductBundle = false,
                            bundleProductIds = [],
                            onClick = null,
                            ...rest
                          }: TableCellProductProps) => {
  const { formatMessage } = useIntl();
  const theme = useTheme<Theme>();
  const hasChip = productType !== null || inStockPool || hasNoTvLock;

  const productImageBundleStyle: CSSProperties = useMemo(() => ({
    width: theme.spacing(10),
    height: theme.spacing(10),
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.grey['100'],
    userSelect: 'none',
    cursor: 'pointer'
  }), []);

  const productImageStyle = useMemo<CSSProperties>(() => ({ cursor: 'pointer' }), []);
  const productImageWrapperStyle = useMemo<CSSProperties>(() => ({ marginTop: 'auto', marginBottom: 'auto' }), []);
  const productNameOuterWrapperStyle = useMemo<CSSProperties>(() => ({
    marginLeft: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }), []);
  const productNameInnerWrapperStyle = useMemo<CSSProperties>(() => ({ flex: 1 }), []);
  const productNameStyle = useMemo<CSSProperties>(() => ({
    fontWeight: theme.typography.fontWeightBold,
    whiteSpace: 'normal',
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: productType !== null || inStockPool || hasNoTvLock ? 2 : 3
  }), [productType, inStockPool, hasNoTvLock]);

  const productImage = useMemo(() => {
    return isProductBundle
      ? <div style={productImageBundleStyle} onClick={() => onClick !== null ? onClick(bundleProductIds) : null}>Product Bundle</div>
      : <img src={mediaUri} alt={id} style={productImageStyle} onClick={() => onClick !== null ? onClick([id]) : null} />;
  }, [isProductBundle]);

  return <TableCellRoot {...rest} isNumeric={false}>
    {id && <Grid container>
      <Grid item style={productImageWrapperStyle}>{productImage}</Grid>
      <Grid item xs>
        <div style={productNameOuterWrapperStyle}>
          <div style={productNameInnerWrapperStyle}>
            <Typography variant={'body1'} style={productNameStyle}>{name}</Typography>
          </div>
          {hasChip && <Grid container spacing={1}>
            {productType !== null && <Grid item><Chip size={'small'} label={formatMessage({ id: 'product.type.' + productType })} /></Grid>}
            {inStockPool && <Grid item><Chip size={'small'} label={'StockPool'} /></Grid>}
            {hasNoTvLock && <Grid item><Chip size={'small'} label={'NoTv'} /></Grid>}
          </Grid>}
          <div style={{ marginTop: '2px' }}>
            {id && (
              <Button size={'small'} color={'secondary'} onClick={() => onClick !== null ? onClick(isProductBundle ? bundleProductIds : [id]) : null}>
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

export default memo(TableCellProduct);

