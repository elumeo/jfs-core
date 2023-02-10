import React from 'react';
import { Stack } from '@mui/material';
import Image from './Image';
import Details from './Details';
import { TableCellRootProps } from 'Component/Table/TableCell/TableCellRoot';
import { TableCellLoadingContent, TableCellRoot } from 'Component/Table/TableCell';
import { MediaUri } from 'Types/MediaUri';
import Attributes from 'Component/Table/TableCell/TableCellProduct/Attributes';

export type TableCellProductProps = Partial<TableCellRootProps> & {
  id?: string;
  rowIndex?: number;
  mediaUris?: MediaUri[];
  name?: string;
  productType?: string;
  inStockPool?: boolean;
  hasNoTvLock?: boolean;
  isProductBundle?: boolean;
  onClick?: (productId: string, rowIndex?: number) => void;
}

const TableCellProduct: React.FC<TableCellProductProps> = ({
  id = null,
  rowIndex = null,
  mediaUris = null,
  name = null,
  productType = null,
  inStockPool = false,
  hasNoTvLock = false,
  isProductBundle = false,
  onClick = null,
  ...rest
}) => {
  const handleOnClick = React.useCallback(() => onClick(id, rowIndex), [onClick, id, rowIndex]);
  return <TableCellRoot {...rest} isNumeric={false}>
    {id && <Stack direction='row' maxHeight='100%' spacing={1} maxWidth='inherit' width={'100%'}>
      <Image onClick={handleOnClick} isProductBundle={isProductBundle} id={id} mediaUris={mediaUris} />
      <Details onClick={handleOnClick} id={id} name={name} />
      <Attributes productType={productType} hasNoTvLock={hasNoTvLock} inStockPool={inStockPool} />
    </Stack>}
    {id === null && <TableCellLoadingContent />}
  </TableCellRoot>;
};

export default TableCellProduct
