import React from 'react';
import DialogContainer from 'react-md/lib/Dialogs';
import { IconSeparator } from 'react-md';
import './_styles.scss';
import { InjectedIntlProps, injectIntl } from 'react-intl';

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
    title,
    titleIcon,
    description,
    closeDialog,
    visible,
    closeButtonText,
    children,
    confirmButtonText,
    onConfirm,
    actions,
    intl,
    ...rest
  }
) =>
  (
    <DialogContainer
      id={`modal-dialog-${Math.round(Math.random() * 1000)}`}
      visible={visible}
      title={
        titleIcon
          ? <IconSeparator label={title} iconBefore>{titleIcon}</IconSeparator>
          : title
      }
      aria-describedby={description}
      modal
      onHide={closeDialog}
      actions={[
        ...(
          (closeButtonText && closeDialog) && [
            {
              onClick: () => {
                closeDialog(false);
              },
              primary: true,
              label: typeof closeButtonText == 'string'
                ? intl.formatMessage({ id: closeButtonText })
                : closeButtonText,
              className: 'jfs-close-btn'
            }] || []),
        ...(
          (confirmButtonText && onConfirm) && [
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
          ] || []
        ),
        ...(actions || [])
      ]}
      {...rest}
    >
      {children}
    </DialogContainer>
  );

ModalDialog.defaultProps = {
  title: 'Modal Dialog',
  description: '',
  closeButtonText: 'app.closeBtnLabelModalDialog',
  focusOnMount: true,
};

export default injectIntl(ModalDialog);