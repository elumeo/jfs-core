import React, { ReactNode } from 'react';
import { IconButtonProps } from '@material-ui/core/IconButton';
declare type AppCardTitleProps = {
    isLoading?: boolean;
    title: ReactNode;
    subtitle?: ReactNode;
    titleIcon?: ReactNode;
    action?: ReactNode;
    onRefresh?: () => void;
    refreshButtonColor?: IconButtonProps['color'];
    refreshButtonSize?: IconButtonProps['size'];
};
declare const _default: React.MemoExoticComponent<({ isLoading, title, subtitle, titleIcon, onRefresh, refreshButtonColor, refreshButtonSize, action }: AppCardTitleProps) => JSX.Element>;
export default _default;
