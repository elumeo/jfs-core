import React, { CSSProperties, memo } from 'react';
import { Grid } from '@material-ui/core';
import BundleImage from './BundleImage';
import ProductImage from './ProductImage';
import { MediaUri } from 'Types/MediaUri';

const imageWrapperStyles: CSSProperties = { marginTop: 'auto', marginBottom: 'auto' };

export type ImageProps = {
  id?: string;
  mediaUris?: MediaUri[];
  isProductBundle?: boolean;
  onClick?: HTMLElement['click'];
}

const Image = ({ id = null, mediaUris = null, isProductBundle = false, onClick = null }: ImageProps) => {
  const productImage = isProductBundle ? <BundleImage onClick={onClick} /> : <ProductImage onClick={onClick} id={id} mediaUris={mediaUris} />;
  return <Grid item style={imageWrapperStyles}>{productImage}</Grid>;
};

export default memo(Image);
