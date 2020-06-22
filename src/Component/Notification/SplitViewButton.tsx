import * as React from 'react';
import { Button } from 'react-md';
import { connect } from 'react-redux';
import {
  pinNotificationDrawerAction,
  unpinNotificationDrawerAction
} from '../../Store/Action/NotificationAction';
import Global from '../../Store/Reducer/Global';

export interface ISplitViewButtonProps {
  notificationDrawerPinned?: boolean;
  pinNotificationDrawerAction?: typeof pinNotificationDrawerAction;
  unpinNotificationDrawerAction?: typeof unpinNotificationDrawerAction;
}

class SplitViewButton extends React.Component<ISplitViewButtonProps> {
  render() {
    const {
      props: {
        notificationDrawerPinned,
        pinNotificationDrawerAction,
        unpinNotificationDrawerAction
      }
    } = this;
    return (
      <Button
        icon
        primary={notificationDrawerPinned}
        className="split-view-button"
        onClick={() => (
          notificationDrawerPinned
            ? unpinNotificationDrawerAction()
            : pinNotificationDrawerAction()
        )}>
        vertical_split
      </Button>
    );
  }
}

const mapStateToProps = (
  store: Global.State,
  ownProps: ISplitViewButtonProps
): ISplitViewButtonProps => ({
  ...store.Core.Notification,
  ...ownProps
});

const enhance = connect(mapStateToProps, {
  pinNotificationDrawerAction,
  unpinNotificationDrawerAction
});

export default enhance(SplitViewButton);
