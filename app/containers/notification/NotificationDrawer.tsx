import * as React from 'react';

import NotificationCard from './NotificationCard';
import Drawer, { DrawerPosition } from "react-md/lib/Drawers";

import { IRootReducer } from "../../store/reducer/RootReducer";
import { connect } from "react-redux";
import {
  dismissAllNotificationsAction,
  toggleNotificationDrawerAction,
  toggleNotificationDrawerPinnedAction
} from "../../store/action/NotificationAction";
import NoNotifications from "./NoNotifications";
import { Button } from "react-md";
import Toolbar from "react-md/lib/Toolbars";
import { INotification } from "../../store/reducer/NotificationReducer";

import './NotificationDrawer.scss'

const ReactCSSTransitionGroup = require("react-addons-css-transition-group");

interface INotificationDrawerProps {
  visible: boolean;
  position: DrawerPosition;
  toggleDrawer: (visible: boolean) => void;
  isAuthorized?: boolean;
  notifications?: INotification[];
  notificationDrawerPinned?: boolean;
  dismissAllNotificationsAction?: () => void;
  toggleNotificationDrawerAction?: () => void;
  toggleNotificationDrawerPinnedAction?: () => void;
  notificationDismissCounter?: number;
}

class NotificationDrawer extends React.Component<INotificationDrawerProps> {
  render() {
    const {
      notifications, visible, toggleDrawer, position, isAuthorized, notificationDrawerPinned,
      dismissAllNotificationsAction, toggleNotificationDrawerPinnedAction, toggleNotificationDrawerAction,
      notificationDismissCounter
    } = this.props;
    const empty = !notifications.length;

    let content;
    if (empty || !isAuthorized) {
      content = [<NoNotifications key={0}/>];
    } else {
      content = notifications.map(n => (
        <NotificationCard config={n} key={n.id}/>
      ))
    }

    const hideDrawer = <Button icon onClick={toggleNotificationDrawerAction}>arrow_forward</Button>;
    const verticalSplit = <Button icon onClick={toggleNotificationDrawerPinnedAction}>vertical_split</Button>;
    const clearAll = <Button icon onClick={dismissAllNotificationsAction} disabled={empty}>clear_all</Button>;
    const header = <Toolbar
      nav={hideDrawer}
      actions={[verticalSplit, clearAll]}
      className="md-divider-border md-divider-border--bottom"
      //title={formatMessage({ id: 'app.notifications' })}
    />;

    return (
      <Drawer
        className={`notification-drawer ${notificationDrawerPinned ? 'notification-drawer--pinned' : ''}`}
        visible={visible}
        onVisibilityChange={toggleDrawer}
        position={position}
        header={header}
        type={Drawer.DrawerTypes.TEMPORARY}
        clickableDesktopOverlay={!notificationDrawerPinned}
        overlay={!notificationDrawerPinned}
      >
        <ReactCSSTransitionGroup
          transitionName={"fadein"}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={notificationDismissCounter < 0 ? 200 : 2000}
        >
          {content}
        </ReactCSSTransitionGroup>
      </Drawer>
    );
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: INotificationDrawerProps) => ({
  ...state.notificationReducer,
  ...state.sessionReducer,
  ...state.settingsReducer,
  ...ownProps
});

export default connect(mapStateToProps, {
  toggleNotificationDrawerAction,
  dismissAllNotificationsAction,
  toggleNotificationDrawerPinnedAction
})(NotificationDrawer)