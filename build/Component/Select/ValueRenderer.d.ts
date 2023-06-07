import React from "react";
type Props<T> = {
    selected: T;
    maxValuesShown?: number;
    labelsByValue: Record<string, string>;
    onUnselect: (value: string) => void;
    onClear: () => void;
    isInClearableState: boolean;
};
declare const _default: React.MemoExoticComponent<(<T>({ selected, labelsByValue, onUnselect, onClear, maxValuesShown, isInClearableState }: Props<T>) => JSX.Element)>;
export default _default;
