import React from 'react';
import './_styles.scss';
import { InjectedIntlProps } from 'react-intl';
interface IModalDialog extends InjectedIntlProps {
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
declare const _default: React.FC<IModalDialog>;
export default _default;
