import React from "react";
import { ChipProps } from "@material-ui/core";
import { SelectOption } from '../SelectClearButton/index';
export declare type Props = {
    onDeleteItem?: (value: string) => void;
    setValue: (value: string) => void;
    selectedValue: SelectOption;
    renderValueAsChip?: boolean;
    valueChipProps?: Partial<ChipProps>;
};
declare const _default: React.MemoExoticComponent<({ setValue, valueChipProps, selectedValue, onDeleteItem, renderValueAsChip }: Props) => JSX.Element>;
export default _default;
