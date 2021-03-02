import React from 'react';
import { connect } from 'react-redux';
import * as Action from 'Store/Action';
import './SettingsDialog.scss';
import { Dialog, DialogActions, DialogTitle, Button } from '@material-ui/core';
import { useIntl } from 'react-intl';
import { State } from 'Store/Reducer/Global';

export type ISettingsDialogProps = Partial<typeof Action> & {
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
  state: State,
  ownProps: ISettingsDialogProps
): ISettingsDialogProps => ({
  ...ownProps,
  settingsOpen: state.Core.Settings.settingsOpen
});

const enhance = connect(mapStateToProps, Action);

export default enhance(SettingsDialog);
