import React from 'react';
import { useIntl } from 'react-intl';
import { Chip, Stack, SxProps } from '@mui/material';

const containerStyle: SxProps = {
  marginTop: .5,
  marginLeft: .5
}

export type AttributesProps = {
  productType?: string;
  inStockPool?: boolean;
  hasNoTvLock?: boolean;
}

const Attributes: React.FC<AttributesProps> = ({ productType = null, inStockPool = false, hasNoTvLock = false }) => {
  const { formatMessage } = useIntl();
  const hasChip = productType !== null || inStockPool || hasNoTvLock;
  return hasChip && <>
    <Stack spacing={1} sx={containerStyle}>
      {productType !== null && <Chip size={'small'} label={formatMessage({ id: 'product.type.' + productType })} />}
      {inStockPool && <Chip size={'small'} label={'StockPool'} />}
      {hasNoTvLock && <Chip size={'small'} label={'NoTv'} />}
    </Stack>
  </> || <></>;
};

export default Attributes
