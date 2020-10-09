import React from 'react';
import './_styles.scss';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { IconSeparator } from 'react-md';
import DialogContainer from 'react-md/lib/Dialogs';

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

const ModalDialog: React.FC<IModalDialog> = (
  {
    title = 'Modal Dialog',
    titleIcon,
    description = '',
    closeDialog,
    visible,
    closeButtonText = 'app.closeBtnLabelModalDialog',
    focusOnMount = undefined,
    closeOnEsc = undefined,
    children,
    confirmButtonText,
    onConfirm,
    actions,
    intl,
    ...rest
  }
) => {
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
    })
  }

  if (!!actions?.length) {
    actions.forEach(a => combinedActions.push(a));
  }

  focusOnMount = focusOnMount === undefined ? !!combinedActions.length : focusOnMount;
  closeOnEsc = closeOnEsc === undefined ? !!closeDialog : false;

  return (
    <DialogContainer
      id={`modal-dialog-${new Date().getTime()}-${Math.round(Math.random() * 100000)}`}
      visible={visible}
      title={
        titleIcon
          ? <IconSeparator label={title} iconBefore>{titleIcon}</IconSeparator>
          : title
      }
      aria-describedby={description}
      modal
      onHide={closeDialog}
      actions={combinedActions}
      focusOnMount={focusOnMount}
      closeOnEsc={closeOnEsc}
      {...rest}
    >
      {children}
    </DialogContainer>
  );
};

export default injectIntl(ModalDialog);
