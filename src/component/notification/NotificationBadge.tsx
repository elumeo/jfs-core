import * as React from 'react';
import { connect } from 'react-redux';
import { Badge, Button } from 'react-md';

import './NotificationBadge.scss'
import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import { toggleNotificationDrawerAction } from '../../store/action/NotificationAction';
import { INotification } from '../../store/reducer/NotificationReducer';

export interface INotificationBadgeProps {
  notifications?: INotification[];
  toggleNotificationDrawerAction?: typeof toggleNotificationDrawerAction;
}

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
        <Button
          icon
          onClick={() => toggleNotificationDrawerAction()}
          aria-describedby="notification-badge">
          notifications
        </Button>
      </Badge>
    );
  }
}

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: INotificationBadgeProps
): INotificationBadgeProps => ({
  ...state.notificationReducer,
  ...ownProps
});

export default connect(mapStateToProps, {
  toggleNotificationDrawerAction
})(NotificationBadge);
