import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';

import DialogContainer from 'react-md/lib/Dialogs';

interface IModalDialog extends InjectedIntlProps {
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

const ModalDialog: React.FC<IModalDialog> = ({
  title,
  description,
  closeDialog,
  intl,
  visible,
  closeButtonText,
  children,
  className,
  confirmButtonText,
  onConfirm,
  closeOnEsc,
  actions
}) => {
  const { formatMessage } = intl;
  const id = `modal-dialog-${Math.round(Math.random() * 1000)}`;
  return (
    <DialogContainer
      id={id}
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
          label: formatMessage({ id: closeButtonText }),
        },
        ...(
          (confirmButtonText && onConfirm) && [
            {
              onClick: () => {
                onConfirm();
              },
              primary: true,
              label: formatMessage({ id: confirmButtonText }),
            }
          ] || []
        ),
        ...(actions || [])
      ]}
    >
      {children}
    </DialogContainer>
  );
};

ModalDialog.defaultProps = {
  title: 'Modal Dialog',
  description: '',
  closeButtonText: 'app.closeBtnLabelModalDialog',
};

// noinspection JSUnusedGlobalSymbols
export default injectIntl(ModalDialog);