import * as React from 'react';
import { connect } from 'react-redux';
import { ICoreRootReducer } from '../../Store/Reducer';
import NotificationCard from './NotificationCard';

import './OnScreenNotifications.scss';
import { INotification } from '../../Store/Reducer/NotificationReducer';

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
            .map(n => <NotificationCard config={{ ...n, dismissButtonVisible: false }} key={n.id}/>)
        }
      </ReactCSSTransitionGroup>
    );
  }
}

// noinspection JSUnusedGlobalSymbols
export default connect((store: ICoreRootReducer, ownProps: IOnScreenNotificationsProps): IOnScreenNotificationsProps => ({
  ...ownProps,
  notifications: store.notificationReducer.notifications,
  dismissAnimationClassName: store.notificationReducer.dismissAnimationClassName,
}))(OnScreenNotifications)
