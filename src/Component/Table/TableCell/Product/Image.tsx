import React from 'react';
import { ButtonBase } from '@mui/material';
import BundleImage from './BundleImage';
import ProductImage from './ProductImage';
import { MediaUri } from 'Types/MediaUri';

export type ImageProps = {
  id?: string;
  mediaUris?: MediaUri[];
  isProductBundle?: boolean;
  onClick?: HTMLElement['click'];
}

const Image: React.FC<ImageProps> = ({
  id = null,
  mediaUris = null,
  isProductBundle = false,
  onClick = null
}) => (
  <ButtonBase onClick={onClick}>
    {
      isProductBundle
        ? <BundleImage />
        : <ProductImage id={id} mediaUris={mediaUris} />
    }
  </ButtonBase>
)

export default Image
