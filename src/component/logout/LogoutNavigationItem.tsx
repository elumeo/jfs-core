import * as React from 'react';
import NavigationItem from '../navigation/NavigationItem';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { openLogout } from '../../store/action/LogoutAction';
import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import { injectIntl } from 'react-intl';

export interface ILogoutNavigationItemProps {
  robotLoginAvailable?: boolean;
  openLogout?: () => void;
}

class LogoutNavigationItem extends React.Component<ILogoutNavigationItemProps> {
  render() {
    const {
      props: { robotLoginAvailable, openLogout }
    } = this;

    return (
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
  }
}

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
  connect(mapStateToProps, { openLogout }),
  injectIntl
);

export default enhance(LogoutNavigationItem);
