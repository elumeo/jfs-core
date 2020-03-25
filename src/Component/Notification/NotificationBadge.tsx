import React from 'react';
import { connect } from 'react-redux';
import { Badge, Button } from 'react-md';

import './NotificationBadge.scss'
import { ICoreRootReducer } from '../../Store/Reducer';
import { toggleNotificationDrawerAction } from '../../Store/Action/NotificationAction';
import { INotification } from '../../Store/Reducer/NotificationReducer';

export interface INotificationBadgeProps {
  notifications?: INotification[];
  toggleNotificationDrawerAction?: typeof toggleNotificationDrawerAction;
}

const NotificationBadge: React.FC<INotificationBadgeProps> = ({
  notifications, toggleNotificationDrawerAction: _toggleNotificationDrawerAction
}) => {
  const empty = !notifications.length;
  return (
    <Badge
      primary
      circular
      aria-haspopup
      badgeId='notification-badge'
      badgeContent={empty ? '' : notifications.length}
      className={empty ? 'md-badge-container--empty' : ''}
    >
      <Button
        icon
        onClick={() => _toggleNotificationDrawerAction()}
        aria-describedby='notification-badge'>
        notifications
      </Button>
    </Badge>
  );
};

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
