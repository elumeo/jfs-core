import * as React from 'react';

import NotificationCard from './NotificationCard';
import Drawer from 'react-md/lib/Drawers';

import { ICoreRootReducer } from '../../Store/Reducer';
import { connect } from 'react-redux';
import NoNotifications from './NoNotifications';
import Toolbar from 'react-md/lib/Toolbars';
import { INotification } from '../../Store/Reducer/NotificationReducer';

import './NotificationDrawer.scss'
import SplitViewButton from './SplitViewButton';
import DismissAllNotificationsButton from './DismissAllNotificationsButton';
// noinspection TypeScriptPreferShortImport
import { hideNotificationDrawerAction, toggleNotificationDrawerAction } from '../../Store/Action/NotificationAction';
import { Button } from 'react-md';

const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

interface INotificationDrawerProps {
  notificationDrawerVisible?: boolean;
  notifications?: INotification[];
  notificationDrawerPinned?: boolean;
  toggleNotificationDrawerAction?: typeof toggleNotificationDrawerAction;
  hideNotificationDrawerAction?: typeof hideNotificationDrawerAction;
}

class NotificationDrawer extends React.Component<INotificationDrawerProps> {

  closeOnESC = (e: React.KeyboardEvent) => {
    if (e.keyCode == 13) {
      this.props.hideNotificationDrawerAction();
    }
  };

  render() {
    const { notifications, notificationDrawerPinned, notificationDrawerVisible } = this.props;
    const empty = !notifications.length;

    let content;
    if (empty) {
      content = [<NoNotifications key='no-notifications'/>];
    } else {
      content = notifications.map(n => <NotificationCard config={{ ...n, hideButtonVisible: false }} key={n.id}/>);
    }

    const header = <Toolbar
      nav={<Button icon onClick={() => this.props.hideNotificationDrawerAction()}>arrow_forward</Button>}
      actions={[<SplitViewButton/>, <DismissAllNotificationsButton/>]}
      className='md-divider-border md-divider-border--bottom'
    />;

    const pinnedClassName = notificationDrawerPinned ? 'notification-drawer--pinned' : '';
    const overlayClassName = notificationDrawerPinned ? 'md-overlay--hidden' : '';

    return (
      <Drawer
        className={`notification-drawer ${pinnedClassName}`}
        visible={notificationDrawerVisible}
        onVisibilityChange={this.props.toggleNotificationDrawerAction}
        position='right'
        header={header}
        onKeyDown={this.closeOnESC}
        type={Drawer.DrawerTypes.TEMPORARY}
        overlayClassName={overlayClassName}
        clickableDesktopOverlay
        overlay
      >
        <ReactCSSTransitionGroup
          transitionName={{
            enter: 'fadein-enter',
            leave: 'disappear-leave',
          }}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={200}
        >
          {content}
        </ReactCSSTransitionGroup>
      </Drawer>
    );
  }
}

// noinspection JSUnusedGlobalSymbols
export default connect((
  store: ICoreRootReducer, ownProps: INotificationDrawerProps): INotificationDrawerProps => ({
  ...ownProps,
  notificationDrawerVisible: store.notificationReducer.notificationDrawerVisible,
  notifications: store.notificationReducer.notifications,
  notificationDrawerPinned: store.notificationReducer.notificationDrawerPinned,
}), {
  toggleNotificationDrawerAction,
  hideNotificationDrawerAction
})(NotificationDrawer)
