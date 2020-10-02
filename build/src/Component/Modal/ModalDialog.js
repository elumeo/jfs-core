var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import DialogContainer from 'react-md/lib/Dialogs';
import { IconSeparator } from 'react-md';
import './_styles.scss';
import { injectIntl } from 'react-intl';
const ModalDialog = (_a) => {
    var { title, titleIcon, description, closeDialog, visible, closeButtonText, children, confirmButtonText, onConfirm, actions, intl } = _a, rest = __rest(_a, ["title", "titleIcon", "description", "closeDialog", "visible", "closeButtonText", "children", "confirmButtonText", "onConfirm", "actions", "intl"]);
    return (React.createElement(DialogContainer, Object.assign({ id: `modal-dialog-${Math.round(Math.random() * 1000)}`, visible: visible, title: titleIcon
            ? React.createElement(IconSeparator, { label: title, iconBefore: true }, titleIcon)
            : title, "aria-describedby": description, modal: true, onHide: closeDialog, actions: [
            ...((closeButtonText && closeDialog) && [
                {
                    onClick: () => {
                        closeDialog(false);
                    },
                    primary: true,
                    label: typeof closeButtonText == 'string'
                        ? intl.formatMessage({ id: closeButtonText })
                        : closeButtonText,
                    className: 'jfs-close-btn'
                }
            ] || []),
            ...((confirmButtonText && onConfirm) && [
                {
                    onClick: () => {
                        onConfirm();
                    },
                    primary: true,
                    label: typeof confirmButtonText == 'string'
                        ? intl.formatMessage({ id: confirmButtonText })
                        : confirmButtonText,
                    className: 'jfs-confirm-btn'
                }
            ] || []),
            ...(actions || [])
        ] }, rest), children));
};
ModalDialog.defaultProps = {
    title: 'Modal Dialog',
    description: '',
    closeButtonText: 'app.closeBtnLabelModalDialog',
    focusOnMount: true,
};
export default injectIntl(ModalDialog);
//# sourceMappingURL=ModalDialog.js.map