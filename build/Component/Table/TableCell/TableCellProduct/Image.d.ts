import React from 'react';
import { MediaUri } from '../../../../Types/MediaUri';
export type ImageProps = {
    id?: string;
    mediaUris?: MediaUri[];
    isProductBundle?: boolean;
    onClick?: HTMLElement['click'];
};
declare const _default: React.MemoExoticComponent<({ id, mediaUris, isProductBundle, onClick }: ImageProps) => React.JSX.Element>;
export default _default;
