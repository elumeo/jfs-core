import React from 'react';
import { MediaUri } from '../../../../Types/MediaUri';
export type ProductImageProps = {
    id: string;
    mediaUris?: MediaUri[];
};
declare const ProductImage: React.FC<ProductImageProps>;
export default ProductImage;
