import React from 'react';
import { AppBarProps, ToolbarProps } from '@mui/material';
export declare type Props = {
    left?: React.ReactNode;
    middle?: React.ReactNode;
    right?: React.ReactNode;
    variant?: ToolbarProps['variant'];
    position?: AppBarProps['position'];
    color?: AppBarProps['color'];
    appBarProps?: AppBarProps;
    toolbarProps?: ToolbarProps;
};
declare const AppToolbar: React.FC<Props>;
export default AppToolbar;
