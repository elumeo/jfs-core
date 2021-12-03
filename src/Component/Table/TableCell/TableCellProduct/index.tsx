import React, { memo } from 'react';
import { Grid } from '@material-ui/core';
import Image from './Image';
import Details from './Details';
import { TableCellRootProps } from 'Component/Table/TableCell/TableCellRoot';
import { TableCellLoadingContent, TableCellRoot } from 'Component/Table/TableCell';
import { MediaUri } from 'Types/MediaUri';

export type TableCellProductProps = Partial<TableCellRootProps> & {
  id?: string;
  mediaUris?: MediaUri[];
  name?: string;
  productType?: string;
  inStockPool?: boolean;
  hasNoTvLock?: boolean;
  isProductBundle?: boolean;
  onClick?: HTMLElement['click'];
}

const TableCellProduct = ({
                            id = null,
                            mediaUris = null,
                            name = null,
                            productType = null,
                            inStockPool = false,
                            hasNoTvLock = false,
                            isProductBundle = false,
                            onClick = null,
                            ...rest
                          }: TableCellProductProps) => {
  return <TableCellRoot {...rest} isNumeric={false}>
    {id && <Grid container>
      <Image onClick={onClick} isProductBundle={isProductBundle} id={id} mediaUris={mediaUris} />
      <Details onClick={onClick} id={id} productType={productType} name={name} inStockPool={inStockPool} hasNoTvLock={hasNoTvLock} />
    </Grid>}
    {id === null && <TableCellLoadingContent />}
  </TableCellRoot>;
};

export default memo(TableCellProduct);
