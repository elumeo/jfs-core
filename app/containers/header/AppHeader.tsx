import * as React from 'react';
import NavigationDrawer from '../navigation/NavigationDrawer';
import AppToolbar from './AppToolbar';
import NotificationDrawer from "../notification/NotificationDrawer";
import NotificationFadeIn from "../notification/OnScreenNotifications";
import { connect } from "react-redux";
import { IRootReducer } from "../../store/reducer/RootReducer";
import { toggleNotificationDrawerAction } from "../../store/action/NotificationAction";

export interface IAppHeaderProps {
  notificationDrawerVisible?: boolean;
  toggleNotificationDrawerAction?: () => void;
}

export interface IAppHeaderState {
  navigationVisible: boolean;
}

class AppHeader extends React.Component<IAppHeaderProps, IAppHeaderState> {
  state = { navigationVisible: false, notificationDrawerVisible: false };
  render() {
    const {
      state: { navigationVisible },
      props: { notificationDrawerVisible, toggleNotificationDrawerAction }
    } = this;

    return (
      <div className="app-header">
        <AppToolbar
          onToggleMenu={() => this.setState({ navigationVisible: true })}/>
        <NavigationDrawer
          visible={navigationVisible}
          position="left"
          closeDrawer={() => this.setState({ navigationVisible: false })}
          toggleDrawer={() => this.setState({ navigationVisible: !navigationVisible })}
        />
        <NotificationDrawer
          visible={notificationDrawerVisible}
          position="right"
          toggleDrawer={toggleNotificationDrawerAction}
        />
        <NotificationFadeIn/>
      </div>
    )
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: IAppHeaderProps) => ({
  ...state.notificationReducer,
  ...ownProps
});

export default connect(mapStateToProps, { toggleNotificationDrawerAction })(AppHeader);