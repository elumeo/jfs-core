import React from 'react';
import { MediaUri } from '../../../../Types/MediaUri';
export declare type ImageProps = {
    id?: string;
    mediaUris?: MediaUri[];
    isProductBundle?: boolean;
    onClick?: HTMLElement['click'];
};
declare const _default: React.MemoExoticComponent<({ id, mediaUris, isProductBundle, onClick }: ImageProps) => JSX.Element>;
export default _default;
