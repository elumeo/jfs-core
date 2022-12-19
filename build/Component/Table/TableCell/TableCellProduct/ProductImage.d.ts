import React from 'react';
import { MediaUri } from '../../../../Types/MediaUri';
export type ProductImageProps = {
    id: string;
    mediaUris?: MediaUri[];
    onClick?: HTMLElement['click'];
};
declare const _default: React.MemoExoticComponent<({ id, mediaUris, onClick }: ProductImageProps) => JSX.Element>;
export default _default;
