import React, { MouseEventHandler } from 'react';
import { ChipProps } from '@material-ui/core';
export declare type Props = Partial<Omit<ChipProps, 'onDelete'>> & {
    onDelete: MouseEventHandler<HTMLDivElement>;
    value: string;
};
declare const _default: React.MemoExoticComponent<({ onDelete, value, ...rest }: Props) => JSX.Element>;
export default _default;
