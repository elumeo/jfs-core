import React, { CSSProperties, memo } from 'react';
import NoProductImageAvailable from './NoProductImageAvailable';
import { MediaUri } from 'Types/MediaUri';

const styles: CSSProperties = { cursor: 'pointer' };

export type ProductImageProps = {
  id: string;
  mediaUris?: MediaUri[];
  onClick?: HTMLElement['click'];
}

const ProductImage = ({ id, mediaUris = [], onClick = null }: ProductImageProps) => {
  const mediaUri = mediaUris.length > 0 ? mediaUris.find(mediaUri => mediaUri.productId === id) : undefined;

  return mediaUri !== undefined
    ? <img src={mediaUri.uri} alt={id} style={styles} onClick={onClick} />
    : <NoProductImageAvailable onClick={onClick} />;
};

export default memo(ProductImage);

