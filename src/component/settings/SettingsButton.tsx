import * as React from 'react';
import Button from 'react-md/lib/Buttons/Button';

import { connect } from 'react-redux';
import { compose } from 'redux';

import IRootReducer from '../../store/reducer/RootReducer';

import { closeDialog, openDialog } from '../../store/action/SettingsAction';
import { injectIntl } from 'react-intl';

export interface ISettingsButtonProps {
  settingsOpened?: boolean;
  openDialog?: () => void;
  closeDialog?: () => void;
}

class SettingsButton extends React.Component<ISettingsButtonProps> {
  render() {
    const { props: { settingsOpened, openDialog, closeDialog } } = this;
    return (
      <Button icon onClick={() => settingsOpened ? closeDialog() : openDialog()}>
        settings
      </Button>
    );
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: ISettingsButtonProps) => ({
  ...ownProps,
  settingsOpened: state.settingsReducer.open
});

const enhance = compose(
  connect(mapStateToProps, { openDialog, closeDialog }),
  injectIntl
);

// noinspection JSUnusedGlobalSymbols
export default enhance(SettingsButton);
