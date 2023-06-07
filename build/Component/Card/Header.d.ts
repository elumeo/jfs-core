import React from 'react';
import { PropTypes } from '@mui/material';
import { IconButtonProps } from '@mui/material/IconButton';
export declare type AppCardHeaderBaseProps = {
    isLoading?: boolean;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    titleIcon?: React.ReactNode;
    action?: React.ReactNode;
    onRefresh?: () => void;
    refreshButtonColor?: PropTypes.Color;
    refreshButtonSize?: IconButtonProps['size'];
};
declare const Header: React.FC<AppCardHeaderBaseProps>;
export default Header;
