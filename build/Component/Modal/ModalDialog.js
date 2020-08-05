import React from 'react';
import DialogContainer from 'react-md/lib/Dialogs';
import International from '../International';
import { IconSeparator } from 'react-md';
import './ModalDialog.scss';
const ModalDialog = ({ title, titleIcon, description, closeDialog, visible, closeButtonText, children, className, confirmButtonText, onConfirm, closeOnEsc, actions }) => (React.createElement(International, null, ({ formatMessage }) => (React.createElement(DialogContainer, { id: `modal-dialog-${Math.round(Math.random() * 1000)}`, visible: visible, title: titleIcon
        ? React.createElement(IconSeparator, { label: title, iconBefore: true }, titleIcon)
        : title, "aria-describedby": description, modal: true, onHide: closeDialog, closeOnEsc: closeOnEsc, className: className, actions: [
        {
            onClick: () => {
                closeDialog(false);
            },
            primary: true,
            label: formatMessage({ id: closeButtonText }),
        },
        ...((confirmButtonText && onConfirm) && [
            {
                onClick: () => {
                    onConfirm();
                },
                primary: true,
                label: formatMessage({ id: confirmButtonText }),
            }
        ] || []),
        ...(actions || [])
    ] }, children))));
ModalDialog.defaultProps = {
    title: 'Modal Dialog',
    description: '',
    closeButtonText: 'app.closeBtnLabelModalDialog',
};
export default ModalDialog;
//# sourceMappingURL=ModalDialog.js.map