import React from 'react';
import DialogContainer from 'react-md/lib/Dialogs';
import International from '../International';
import { IconSeparator } from 'react-md';
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

const ModalDialog: React.FC<IModalDialog> = (
  {
    title,
    titleIcon,
    description,
    closeDialog,
    visible,
    closeButtonText,
    children,
    className,
    confirmButtonText,
    onConfirm,
    closeOnEsc,
    actions,
    focusOnMount,
    initialFocus
  }
) => (
  <International>
    {({ formatMessage }) => (
      <DialogContainer
        id={`modal-dialog-${Math.round(Math.random() * 1000)}`}
        visible={visible}
        focusOnMount={focusOnMount}
        initialFocus={initialFocus}
        title={
          titleIcon
            ? <IconSeparator label={title} iconBefore>{titleIcon}</IconSeparator>
            : title
        }
        aria-describedby={description}
        modal
        onHide={closeDialog}
        closeOnEsc={closeOnEsc}
        className={className}
        actions={[
          {
            onClick: () => {
              closeDialog(false);
            },
            primary: true,
            label: formatMessage({id: closeButtonText}),
            className: 'jfs-close-btn'
          },
          ...(
            (confirmButtonText && onConfirm) && [
              {
                onClick: () => {
                  onConfirm();
                },
                primary: true,
                label: formatMessage({id: confirmButtonText}),
                className: 'jfs-confirm-btn'
              }
            ] || []
          ),
          ...(actions || [])
        ]}
      >
        {children}
      </DialogContainer>
    )}
  </International>
);

ModalDialog.defaultProps = {
  title: 'Modal Dialog',
  description: '',
  closeButtonText: 'app.closeBtnLabelModalDialog',
  focusOnMount: true,
};

export default ModalDialog;
