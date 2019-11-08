import * as React from 'react';
import NavigationItem from '../navigation/NavigationItem';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { openLogout } from '../../store/action/LogoutAction';
import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import { injectIntl } from 'react-intl';

export interface ILogoutNavigationItemProps {
  RobotUsername?: string;
  RobotPassword?: string;
  openLogout?: () => void;
}

class LogoutNavigationItem extends React.Component<ILogoutNavigationItemProps> {
  render() {
    const {
      props: { RobotUsername, RobotPassword, openLogout }
    } = this;

    return (
      !(RobotUsername && RobotPassword)
        ? (
          <NavigationItem
            iconName="exit_to_app"
            messageId="app.logout"
            authorizedOnly
            onClick={() => openLogout()}
          />
        )
        : <></>
    )
  }
}

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: ILogoutNavigationItemProps
): ILogoutNavigationItemProps => ({
  ...ownProps,
  RobotUsername: state.configReducer.config.RobotUsername,
  RobotPassword: state.configReducer.config.RobotPassword,
});

const enhance = compose(
  connect(mapStateToProps, { openLogout }),
  injectIntl
);

export default enhance(LogoutNavigationItem);
