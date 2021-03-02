import React from 'react';
import { connect } from 'react-redux';

import Global from '../../Store/Reducer/Global';
import { closeSettings } from '../../Store/Action/SettingsAction';
import './SettingsDialog.scss';
import { Dialog, DialogActions, DialogTitle, Button } from '@material-ui/core';
import { useIntl } from 'react-intl';

export interface ISettingsDialogProps {
  closeSettings?: typeof closeSettings;
  settingsOpen?: boolean;
}

const SettingsDialog: React.FC<ISettingsDialogProps> = ({
  closeSettings,
  settingsOpen,
  children
}) => {
  const {formatMessage} = useIntl();
      return <Dialog
        className='settings-dialog'
        open={settingsOpen}
        fullWidth={true}
        onClose={ closeSettings}>
          <DialogTitle>{formatMessage({id: 'app.settings'})}</DialogTitle>
        {children}
        <DialogActions>
          <Button variant='contained' color='secondary' onClick={closeSettings}>{formatMessage({id: 'app.closeBtnLabelModalDialog'})}</Button>
        </DialogActions>
      </Dialog>
    
};

const mapStateToProps = (
  state: Global.State,
  ownProps: ISettingsDialogProps
): ISettingsDialogProps => ({
  ...ownProps,
  settingsOpen: state.Core.Settings.settingsOpen
});

const enhance = connect(mapStateToProps, {closeSettings});

export default enhance(SettingsDialog);
