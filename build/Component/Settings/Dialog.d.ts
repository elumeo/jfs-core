/// <reference types="react" />
import { DialogContentProps } from '@mui/material/DialogContent/DialogContent';
declare type Props = {
    children: DialogContentProps['children'];
};
declare const Dialog: ({ children }: Props) => JSX.Element;
export default Dialog;
