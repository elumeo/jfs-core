import React from "react";
import { ChipProps } from "@material-ui/core";
export declare type Props = {
    onDeleteItem?: (item: string) => void;
    setValue: (value: string) => void;
    selected: string;
    renderValueAsChip?: boolean;
    valueChipProps?: Partial<ChipProps>;
};
declare const _default: React.MemoExoticComponent<({ setValue, valueChipProps, selected, onDeleteItem, renderValueAsChip }: Props) => JSX.Element>;
export default _default;
