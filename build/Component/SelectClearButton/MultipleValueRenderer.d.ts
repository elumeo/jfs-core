import React from 'react';
import { ChipProps } from '@material-ui/core';
import { SelectOption } from '../SelectClearButton/index';
export type Props = {
    onDeleteItem?: (value: string) => void;
    setValue: (value: string[]) => void;
    selectedValue: SelectOption[];
    maxValuesToDisplayInInput?: number;
    renderValueAsChip?: boolean;
    valueChipProps?: Partial<ChipProps>;
};
declare const _default: React.MemoExoticComponent<({ setValue, valueChipProps, selectedValue, onDeleteItem, maxValuesToDisplayInInput, renderValueAsChip }: Props) => React.JSX.Element>;
export default _default;
