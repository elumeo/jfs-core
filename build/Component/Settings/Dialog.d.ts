/// <reference types="react" />
import { DialogContentProps } from '@material-ui/core/DialogContent/DialogContent';
type Props = {
    children: DialogContentProps['children'];
};
declare const Dialog: ({ children }: Props) => JSX.Element;
export default Dialog;
