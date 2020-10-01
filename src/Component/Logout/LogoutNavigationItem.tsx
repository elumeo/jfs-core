import React from 'react';
import NavigationItem from 'Component/Navigation/NavigationItem';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { openLogout } from 'Store/Action/LogoutAction';
import Global from 'Store/Reducer/Global';

export interface ILogoutNavigationItemProps {
  robotLoginAvailable?: boolean;
  openLogout?: typeof openLogout;
}

const LogoutNavigationItem: React.FC<ILogoutNavigationItemProps> = ({
  robotLoginAvailable,
  openLogout
}) => (
  !(robotLoginAvailable)
    ? (
      <NavigationItem
        iconName="exit_to_app"
        messageId="app.logout"
        authorizedOnly
        onClick={() => openLogout()}
      />
    )
    : <></>
);

const mapStateToProps = (
  state: Global.State,
  ownProps: ILogoutNavigationItemProps
): ILogoutNavigationItemProps => ({
  ...ownProps,
  robotLoginAvailable: (
    state.Core.Configuration.config && (
      state.Core.Configuration.config.RobotUsername &&
      state.Core.Configuration.config.RobotPassword
    ) &&
    state.Core.App.allowRobotLogin
  )
});

const enhance = compose(
  connect(mapStateToProps, {openLogout})
);

export default enhance(LogoutNavigationItem);
