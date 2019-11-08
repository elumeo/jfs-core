import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Button from 'react-md/lib/Buttons/Button';

import { closeSettings, openSettings } from '../../store/action/SettingsAction';
import { injectIntl } from 'react-intl';
import { ICoreRootReducer } from '../../store/reducer/combineReducers';

export interface ISettingsButtonProps {
  settingsOpen?: boolean;
  openSettings?: () => void;
  closeSettings?: () => void;
}

class SettingsButton extends React.Component<ISettingsButtonProps> {
  render() {
    const { props: { settingsOpen, openSettings, closeSettings } } = this;
    return (
      <Button
        icon
        onClick={() => settingsOpen ? closeSettings() : openSettings()}>
        settings
      </Button>
    );
  }
}

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: ISettingsButtonProps
): ISettingsButtonProps => ({
  ...ownProps,
  settingsOpen: state.settingsReducer.settingsOpen
});

const enhance = compose(
  connect(mapStateToProps, { openSettings, closeSettings }),
  injectIntl
);

export default enhance(SettingsButton);
