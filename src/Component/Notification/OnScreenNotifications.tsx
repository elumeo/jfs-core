import * as React from 'react';
import { connect } from 'react-redux';
import { ICoreRootReducer } from '../../Store/Reducer';
import NotificationCard from './NotificationCard';

import './OnScreenNotifications.scss';
import { INotification } from '../../Store/Reducer/NotificationReducer';

const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export interface IOnScreenNotificationsProps {
  notifications?: INotification[];
}

class OnScreenNotifications extends React.Component<IOnScreenNotificationsProps> {

  render() {
    const {notifications} = this.props;

    return (
      <ReactCSSTransitionGroup
        transitionName={'fadein'}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={150}
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
export default connect((store: ICoreRootReducer, ownProps: IOnScreenNotificationsProps): IOnScreenNotificationsProps => ({
  ...ownProps,
  notifications: store.notificationReducer.notifications
}))(OnScreenNotifications)
