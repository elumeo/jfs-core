import React from 'react';
import { IconButtonProps } from '@mui/material/IconButton';
export type AppCardHeaderBaseProps = {
    isLoading?: boolean;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    titleIcon?: React.ReactNode;
    action?: React.ReactNode;
    onRefresh?: () => void;
    refreshButtonColor?: IconButtonProps['color'];
    refreshButtonSize?: IconButtonProps['size'];
    headerActions?: React.ReactNode;
};
declare const AppCardHeader: React.FC<AppCardHeaderBaseProps>;
export default AppCardHeader;
