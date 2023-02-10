import React from 'react';
import { MediaUri } from '../../../../Types/MediaUri';
export type ImageProps = {
    id?: string;
    mediaUris?: MediaUri[];
    isProductBundle?: boolean;
    onClick?: HTMLElement['click'];
};
declare const Image: React.FC<ImageProps>;
export default Image;
