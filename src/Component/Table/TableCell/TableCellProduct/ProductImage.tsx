import React from 'react';
import NoProductImageAvailable from './NoProductImageAvailable';
import { MediaUri } from 'Types/MediaUri';

const styles: React.CSSProperties = { cursor: 'pointer' };

export type ProductImageProps = {
  id: string;
  mediaUris?: MediaUri[];
}

const ProductImage: React.FC<ProductImageProps> = ({ id, mediaUris = [], }) => {
  const mediaUri = React.useMemo(
    () => mediaUris.find(_mediaUri => _mediaUri?.productId === id && !!_mediaUri?.uri)?.uri,
    [id, mediaUris]
  )
  return mediaUri
    ? <img src={mediaUri} alt={id} style={styles} />
    : <NoProductImageAvailable />;
}
export default ProductImage

