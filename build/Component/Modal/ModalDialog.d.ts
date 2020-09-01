import React from 'react';
import './styles.scss';
interface IModalDialog {
    visible: boolean;
    children?: any;
    closeDialog: (close: boolean) => void;
    title?: string;
    titleIcon?: JSX.Element;
    closeButtonText?: string;
    description?: string;
    className?: string;
    confirmButtonText?: any;
    onConfirm?: any;
    closeOnEsc?: boolean;
    actions?: {}[];
    focusOnMount?: boolean;
    initialFocus?: string;
}
declare const ModalDialog: React.FC<IModalDialog>;
export default ModalDialog;
