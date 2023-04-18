import React, {memo} from 'react';
import {ButtonBase} from '@mui/material';
import BundleImage from './BundleImage';
import ProductImage from './ProductImage';

export type ImageProps = {
  id?: string;
  mediaUri?: string;
  isProductBundle?: boolean;
  onClick?: HTMLElement['click'];
}

const Image: React.FC<ImageProps> = ({id = null, mediaUri = null, isProductBundle = false, onClick = null}) =>
  <ButtonBase onClick={onClick}>{isProductBundle ? <BundleImage/> : <ProductImage id={id} mediaUri={mediaUri}/>}</ButtonBase>;

export default memo(Image);
