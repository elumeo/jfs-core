import React from 'react';
import { StackProps, BoxProps } from '@mui/material';
export type Props = StackProps & {
    navigation?: React.ReactNode;
    spacing?: number;
    contentProps?: BoxProps;
    fullWidth?: boolean;
};
declare const AppLayout: React.FC<Props>;
export default AppLayout;
