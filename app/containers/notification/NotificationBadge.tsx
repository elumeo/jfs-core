import * as React from 'react';
import { Badge, Button } from 'react-md';

import './NotificationBadge.scss'
import { IRootReducer } from "../../store/reducer/RootReducer";
import { connect } from "react-redux";
import {
  toggleNotificationDrawerAction
} from "../../store/action/NotificationAction";
import { INotification } from "../../store/reducer/NotificationReducer";

export interface INotificationBadgeProps {
  autoHideEmptiedDrawer?: boolean;
  notifications?: INotification[];
  toggleNotificationDrawerAction?: () => void;
}

// noinspection JSUnusedGlobalSymbols
class NotificationBadge extends React.Component<INotificationBadgeProps> {

  render() {
    const { notifications, toggleNotificationDrawerAction } = this.props;
    const empty = !notifications.length;
    return (
      <Badge
        primary
        circular
        aria-haspopup
        badgeId="notification-badge"
        badgeContent={empty ? '' : notifications.length}
        className={empty ? 'md-badge-container--empty' : ''}
      >
        <Button icon onClick={toggleNotificationDrawerAction} aria-describedby="notification-badge">
          notifications
        </Button>
      </Badge>
    );
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: INotificationBadgeProps) => ({
  ...state.notificationReducer,
  ...ownProps
});

// noinspection JSUnusedGlobalSymbols
export default connect(mapStateToProps, {
  toggleNotificationDrawerAction
})(NotificationBadge);