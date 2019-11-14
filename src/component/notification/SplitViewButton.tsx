import * as React from 'react';
import { Button } from 'react-md';
import { connect } from 'react-redux';
import { pinNotificationDrawerAction, unpinNotificationDrawerAction } from '../../store/action/NotificationAction';
import IRootReducer from '../../store/reducer/RootReducer';

export interface ISplitViewButtonProps {
  notificationDrawerPinned?: boolean;
  pinNotificationDrawerAction?: typeof pinNotificationDrawerAction;
  unpinNotificationDrawerAction?: typeof unpinNotificationDrawerAction;
}

class SplitViewButton extends React.Component<ISplitViewButtonProps> {
  render() {
    const { notificationDrawerPinned, pinNotificationDrawerAction, unpinNotificationDrawerAction } = this.props;
    return <Button icon primary={notificationDrawerPinned} className="split-view-button"
                   onClick={notificationDrawerPinned ? unpinNotificationDrawerAction : pinNotificationDrawerAction}>vertical_split</Button>;
  }
}

const mapStateToProps = (store: IRootReducer, ownProps: ISplitViewButtonProps) => ({
  ...store.notificationReducer,
  ...ownProps
});

const enhance = connect(mapStateToProps, {
  pinNotificationDrawerAction,
  unpinNotificationDrawerAction
});

export default enhance(SplitViewButton);
