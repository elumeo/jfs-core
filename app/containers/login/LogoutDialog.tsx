import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';

import Dialog from 'react-md/lib/Dialogs';

interface ILogoutDialog extends InjectedIntlProps {
  visible: boolean;
  closeDialog: (logout: boolean) => void;
}

const LogoutDialog: React.FC<ILogoutDialog> = ({ closeDialog, intl, visible }) => {
  const { formatMessage } = intl;
  return (
    <Dialog
      id="logout"
      visible={visible}
      title={formatMessage({ id: 'app.logout.title' })}
      onHide={() => {
        closeDialog(false);
      }}
      aria-labelledby="logoutDescription"
      modal
      actions={[
        {
          onClick: () => {
            closeDialog(true);
          },
          primary: true,
          label: formatMessage({ id: 'app.logout.action' })
        },
        {
          onClick: () => {
            closeDialog(false);
          },
          label: formatMessage({ id: 'app.cancel.action' })
        }
      ]}
    >
      <p id="logoutDescription" className="md-color--secondary-text">
        {formatMessage({ id: 'app.logout.message' })}
      </p>
    </Dialog>
  );
};

export default injectIntl(LogoutDialog);
