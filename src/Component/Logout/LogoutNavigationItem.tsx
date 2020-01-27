import * as React from 'react';
import NavigationItem from '../Navigation/NavigationItem';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { openLogout } from '../../Store/Action/LogoutAction';
import { ICoreRootReducer } from '../../Store/Reducer/combineReducers';
import { injectIntl } from 'react-intl';

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
)

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: ILogoutNavigationItemProps
): ILogoutNavigationItemProps => ({
  ...ownProps,
  robotLoginAvailable: (
    state.configReducer.config && (
      state.configReducer.config.RobotUsername &&
      state.configReducer.config.RobotPassword
    ) &&
    state.appReducer.allowRobotLogin
  )
});

const enhance = compose(
  connect(mapStateToProps, {openLogout}),
  injectIntl
);

export default enhance(LogoutNavigationItem);
