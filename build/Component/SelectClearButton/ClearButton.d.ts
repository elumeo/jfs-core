import React from 'react';
import { IconProps } from "@material-ui/core";
import { IconButtonProps } from "@material-ui/core/IconButton";
export type Props = {
    onClick: (value: string | string[]) => void;
    disabled?: boolean;
    multiple?: boolean;
    size?: IconButtonProps['size'];
    iconSize?: IconProps['fontSize'];
};
declare const _default: React.MemoExoticComponent<({ disabled, size, iconSize, multiple, onClick }: Props) => React.JSX.Element>;
export default _default;
