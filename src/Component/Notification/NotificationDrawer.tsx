import * as React from 'react';

import NotificationCard from './NotificationCard';
import Drawer from 'react-md/lib/Drawers';

import { ICoreRootReducer } from '../../Store/Reducer/combineReducers';
import { connect } from 'react-redux';
import NoNotifications from './NoNotifications';
import Toolbar from 'react-md/lib/Toolbars';
import {
  INotification, NOTIFICATION_DISMISS_ALL_ANIMATION_LIMIT
} from '../../Store/Reducer/NotificationReducer';

import './NotificationDrawer.scss'
import HideNotificationDrawerButton from './HideNotificationDrawerButton';
import SplitViewButton from './SplitViewButton';
import DismissAllNotificationsButton from './DismissAllNotificationsButton';
import {
  hideNotificationDrawerAction, toggleNotificationDrawerAction
} from '../../Store/Action/NotificationAction';

const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

interface INotificationDrawerProps {
  notificationDrawerVisible?: boolean;
  notifications?: INotification[];
  toggleNotificationDrawerAction?: typeof toggleNotificationDrawerAction;
  hideNotificationDrawerAction?: typeof hideNotificationDrawerAction;
  notificationDrawerPinned?: boolean;
  notificationDismissCounter?: number;
}

class NotificationDrawer extends React.Component<INotificationDrawerProps> {

  closeOnESC = (e: React.KeyboardEvent) => {
    if (e.keyCode == 13) {
      this.props.hideNotificationDrawerAction();
    }
  };

  render() {
    const {
      notifications, notificationDrawerPinned, notificationDrawerVisible, notificationDismissCounter, toggleNotificationDrawerAction
    } = this.props;
    const empty = !notifications.length;

    let content;
    if (empty) {
      content = [<NoNotifications key="no-notifications"/>];
    } else {
      content = notifications.map(n => <NotificationCard config={n} key={n.id}/>);
    }

    const header = <Toolbar
      nav={<HideNotificationDrawerButton/>}
      actions={[<SplitViewButton/>, <DismissAllNotificationsButton/>]}
      className="md-divider-border md-divider-border--bottom"
    />;

    const pinnedClassName = notificationDrawerPinned ? 'notification-drawer--pinned' : '';
    const overlayClassName = notificationDrawerPinned ? 'md-overlay--hidden' : '';

    return (
      <Drawer
        className={`notification-drawer ${pinnedClassName}`}
        visible={notificationDrawerVisible}
        onVisibilityChange={toggleNotificationDrawerAction}
        position="right"
        header={header}
        onKeyDown={this.closeOnESC}
        type={Drawer.DrawerTypes.TEMPORARY}
        overlayClassName={overlayClassName}
        clickableDesktopOverlay
        overlay
      >
        <ReactCSSTransitionGroup
          transitionName={'fadein'}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={notificationDismissCounter < 0 ? 150 : (NOTIFICATION_DISMISS_ALL_ANIMATION_LIMIT * 100)}
        >
          {content}
        </ReactCSSTransitionGroup>
      </Drawer>
    );
  }
}

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: INotificationDrawerProps) => ({
  ...state.notificationReducer,
  ...ownProps
});

export default connect(mapStateToProps, {
  toggleNotificationDrawerAction,
  hideNotificationDrawerAction
})(NotificationDrawer)