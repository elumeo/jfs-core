import * as React from 'react';
import Button from 'react-md/lib/Buttons/Button';

import { connect } from 'react-redux';
import { compose } from 'redux';

import IRootReducer from '../../store/reducer/RootReducer';

import { openDialog, closeDialog } from '../../store/action/SettingsAction';
import { injectIntl } from 'react-intl';

export interface ISettingsButtonProps {
  settingsOpened?: boolean;
  openDialog?: () => void;
  closeDialog?: () => void;
}

export interface ISettingsButtonState {

}

class SettingsButton extends React.Component<ISettingsButtonProps, ISettingsButtonState> {
  render() {
    const { props: { settingsOpened, openDialog, closeDialog } } = this;
    return (
      <div className="tool">
        <Button icon onClick={() => {
          if (settingsOpened) {
            closeDialog();
          }
          else {
            openDialog();
          }
        }}>
          settings
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: ISettingsButtonProps) => ({
  ...ownProps,
  settingsOpened: state.settingsReducer.open
})

const enhance = compose(
  connect(mapStateToProps, { openDialog, closeDialog }),
  injectIntl
);

export default enhance(SettingsButton);
