import React from 'react';
import { ChipProps } from '@material-ui/core';
export declare type Props = {
    onDeleteItem?: (item: string) => void;
    value: string[];
    setValue: (value: string[]) => void;
    selected: string[];
    maxValuesToDisplayInInput?: number;
    renderValueAsChip?: boolean;
    valueChipProps?: Partial<ChipProps>;
};
declare const _default: React.MemoExoticComponent<({ value, setValue, valueChipProps, selected, onDeleteItem, maxValuesToDisplayInInput, renderValueAsChip }: Props) => JSX.Element>;
export default _default;
