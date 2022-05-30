import React from 'react';
import { Props as ClearButtonProps } from '../SelectClearButton/ClearButton';
export declare type Props = {
    endAdornment: React.ReactNode;
    showClearButton: boolean;
    multiple?: boolean;
    clearButtonSize?: ClearButtonProps['size'];
    clearIconSize?: ClearButtonProps['iconSize'];
    onClickClearButton?: ClearButtonProps['onClick'];
    disabled?: boolean;
};
declare const _default: React.MemoExoticComponent<({ endAdornment, showClearButton, multiple, clearButtonSize, clearIconSize, disabled, onClickClearButton }: Props) => JSX.Element>;
export default _default;
