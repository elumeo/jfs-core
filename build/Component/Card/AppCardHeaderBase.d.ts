import React, { ReactNode } from 'react';
import { IconButtonProps } from '@material-ui/core/IconButton';
export declare type AppCardHeaderBaseProps = {
    isLoading?: boolean;
    title: ReactNode;
    subtitle?: ReactNode;
    titleIcon?: ReactNode;
    action?: ReactNode;
    onRefresh?: () => void;
    className?: string;
    refreshButtonColor?: IconButtonProps['color'];
    refreshButtonSize?: IconButtonProps['size'];
};
declare const _default: React.MemoExoticComponent<({ isLoading, title, subtitle, titleIcon, onRefresh, refreshButtonColor, refreshButtonSize, action, className, }: AppCardHeaderBaseProps) => JSX.Element>;
export default _default;
