import React from "react";
import { ChipProps } from "@material-ui/core";
export declare type Props = {
    multiple: boolean;
    onDeleteItem?: (item: string) => void;
    value: string | string[];
    setValue: (value: string | string[]) => void;
    selected: string | string[];
    maxValuesToDisplayInInput?: number;
    renderValueAsChip?: boolean;
    valueChipProps?: Partial<ChipProps>;
};
declare const _default: React.MemoExoticComponent<({ multiple, value, setValue, valueChipProps, selected, onDeleteItem, maxValuesToDisplayInInput, renderValueAsChip }: Props) => JSX.Element>;
export default _default;
