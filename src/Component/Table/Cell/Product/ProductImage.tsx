import React, {memo} from 'react';
import NoProductImageAvailable from './NoProductImageAvailable';

const styles: React.CSSProperties = {cursor: 'pointer'};

export type ProductImageProps = {
  id: string;
  mediaUri?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({id, mediaUri = null,}) => mediaUri ? <img src={mediaUri} alt={id} style={styles}/> : <NoProductImageAvailable/>;
export default memo(ProductImage);
