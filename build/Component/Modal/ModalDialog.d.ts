import React from 'react';
import './_styles.scss';
interface IModalDialog {
    visible: boolean;
    children?: any;
    title?: string;
    titleIcon?: JSX.Element;
    closeDialog?: (close: boolean) => void;
    closeButtonText?: string | React.ReactElement;
    description?: string;
    className?: string;
    onConfirm?: any;
    confirmButtonText?: string | React.ReactElement;
    closeOnEsc?: boolean;
    actions?: {}[];
    focusOnMount?: boolean;
    initialFocus?: string;
}
declare const ModalDialog: React.FC<IModalDialog>;
export default ModalDialog;
