import React, { memo } from 'react';
import {Stack, TableCellProps} from '@mui/material';
import Image from './Image';
import Details from './Details';
import Attributes from 'Component/Table/Cell/Product/Attributes';
import Loading from 'Component/Table/Cell/Loading';
import Root from 'Component/Table/Cell/Root';

export type TableCellProductProps = Partial<TableCellProps> & {
  id?: string;
  rowIndex?: number;
  mediaUri?: string;
  name?: string;
  productType?: string;
  inStockPool?: boolean;
  hasNoTvLock?: boolean;
  isProductBundle?: boolean;
  onClick?: (productId: string, rowIndex?: number) => void;
}

const Product: React.FC<TableCellProductProps> = ({
  id = null,
  rowIndex = null,
  mediaUri = null,
  name = null,
  productType = null,
  inStockPool = false,
  hasNoTvLock = false,
  isProductBundle = false,
  onClick = null,
  ...rest
}) => {
  const handleOnClick = React.useCallback(() => onClick(id, rowIndex), [onClick, id, rowIndex]);
  return <Root {...rest}>
    {id && <Stack direction='row' maxHeight='100%' spacing={1} maxWidth='inherit' width={'100%'}>
      <Image onClick={handleOnClick} isProductBundle={isProductBundle} id={id} mediaUri={mediaUri} />
      <Details onClick={handleOnClick} id={id} name={name} />
      <Attributes productType={productType} hasNoTvLock={hasNoTvLock} inStockPool={inStockPool} />
    </Stack>}
    {id === null && <Loading />}
  </Root>;
};

export default memo(Product);
