import React from 'react';
import { StackProps } from '@mui/material';
import { BoxProps } from '@mui/system';
export type Props = StackProps & {
    navigation?: React.ReactNode;
    spacing?: number;
    contentProps?: BoxProps;
};
declare const AppLayout: React.FC<Props>;
export default AppLayout;
