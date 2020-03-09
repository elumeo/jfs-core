import React from 'react';
import DialogContainer from 'react-md/lib/Dialogs';
import International from '../International';

interface IModalDialog {
  visible: boolean;
  children?: any;
  closeDialog: (close: boolean) => void;
  title?: string;
  closeButtonText?: string;
  description?: string;
  className?: string;
  confirmButtonText?: any;
  onConfirm?: any;
  closeOnEsc?: boolean;
  actions?: {}[];
}

const ModalDialog: React.FC<IModalDialog> = (
  {
    title,
    description,
    closeDialog,
    visible,
    closeButtonText,
    children,
    className,
    confirmButtonText,
    onConfirm,
    closeOnEsc,
    actions
  }
) => (
  <International>
    {({ formatMessage }) => (
      <DialogContainer
        id={`modal-dialog-${Math.round(Math.random() * 1000)}`}
        visible={visible}
        title={title}
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
          },
          ...(
            (confirmButtonText && onConfirm) && [
              {
                onClick: () => {
                  onConfirm();
                },
                primary: true,
                label: formatMessage({id: confirmButtonText}),
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
};

export default ModalDialog;
