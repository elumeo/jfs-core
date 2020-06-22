import * as React from 'react';
import { connect } from 'react-redux';
import Global from '../../Store/Reducer/Global';
import NotificationCard from './NotificationCard';

import './OnScreenNotifications.scss';
import { INotification } from '../../Types/Notification';

const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export interface IOnScreenNotificationsProps {
  notifications?: INotification[];
  dismissAnimationClassName?: string;
}

class OnScreenNotifications extends React.Component<IOnScreenNotificationsProps> {

  render() {
    const { notifications, dismissAnimationClassName } = this.props;

    return (
      <ReactCSSTransitionGroup
        transitionName={{
          enter: 'fadein-enter',
          enterActive: 'fadein-enter-active',
          leave: `${dismissAnimationClassName}-leave`,
          leaveActive: `${dismissAnimationClassName}-leave-active`,
        }}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={200}
        className={'notification-fadein'}
      >
        {
          notifications
            .filter(n => n.onScreen)
            .map(n => <NotificationCard config={n} key={n.id}/>)
        }
      </ReactCSSTransitionGroup>
    );
  }
}

// noinspection JSUnusedGlobalSymbols
export default connect((store: Global.State, ownProps: IOnScreenNotificationsProps): IOnScreenNotificationsProps => ({
  ...ownProps,
  notifications: store.Core.Notification.notifications,
  dismissAnimationClassName: store.Core.Notification.dismissAnimationClassName,
}))(OnScreenNotifications)
