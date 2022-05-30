import React, { ReactNode } from 'react';
import { ChipProps } from '@material-ui/core';
export declare type Props = Partial<Omit<ChipProps, 'onDelete'>> & {
    onDelete: (value: string) => void;
    value: string;
    label: ReactNode;
};
declare const _default: React.MemoExoticComponent<({ onDelete, value, label, ...rest }: Props) => JSX.Element>;
export default _default;
