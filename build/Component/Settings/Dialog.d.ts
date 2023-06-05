import React from 'react';
import { DialogContentProps } from '@mui/material/DialogContent/DialogContent';
type Props = {
    children: DialogContentProps['children'];
};
declare const Dialog: ({ children }: Props) => React.JSX.Element;
export default Dialog;
