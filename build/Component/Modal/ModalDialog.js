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
import './_styles.scss';
import { injectIntl } from 'react-intl';
import { IconSeparator } from 'react-md';
import DialogContainer from 'react-md/lib/Dialogs';
const ModalDialog = (_a) => {
    var { title = 'Modal Dialog', titleIcon, description = '', closeDialog, visible, closeButtonText = 'app.closeBtnLabelModalDialog', focusOnMount = undefined, closeOnEsc = undefined, children, confirmButtonText, onConfirm, actions, intl } = _a, rest = __rest(_a, ["title", "titleIcon", "description", "closeDialog", "visible", "closeButtonText", "focusOnMount", "closeOnEsc", "children", "confirmButtonText", "onConfirm", "actions", "intl"]);
    const fM = id => intl.formatMessage({ id });
    const combinedActions = [];
    if (closeButtonText && closeDialog) {
        combinedActions.push({
            primary: true,
            className: 'jfs-close-btn',
            label: typeof closeButtonText == 'string' ? fM(closeButtonText) : closeButtonText,
            onClick: () => closeDialog(false),
        });
    }
    if (confirmButtonText && onConfirm) {
        combinedActions.push({
            primary: true,
            className: 'jfs-confirm-btn',
            label: typeof confirmButtonText == 'string' ? fM(confirmButtonText) : confirmButtonText,
            onClick: () => onConfirm(),
        });
    }
    if (!!(actions === null || actions === void 0 ? void 0 : actions.length)) {
        actions.forEach(a => combinedActions.push(a));
    }
    focusOnMount = focusOnMount === undefined ? !!combinedActions.length : focusOnMount;
    closeOnEsc = closeOnEsc === undefined ? !!closeDialog : false;
    return (React.createElement(DialogContainer, Object.assign({ id: `modal-dialog-${new Date().getTime()}-${Math.round(Math.random() * 100000)}`, visible: visible, title: titleIcon
            ? React.createElement(IconSeparator, { label: title, iconBefore: true }, titleIcon)
            : title, "aria-describedby": description, modal: true, onHide: closeDialog, actions: combinedActions, focusOnMount: focusOnMount, closeOnEsc: closeOnEsc }, rest), children));
};
export default injectIntl(ModalDialog);
//# sourceMappingURL=ModalDialog.js.map