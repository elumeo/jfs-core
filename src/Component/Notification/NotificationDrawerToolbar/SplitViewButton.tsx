import React from 'react';
import { Button } from 'react-md';
import useActions from 'Action/useActions';
import { useSelector } from 'Types/Redux';

const SplitViewButton: React.FC = () => {
  const notificationDrawerPinned = useSelector<boolean>(state => (
    state.Core.Notification.notificationDrawerPinned
  ));
  const {
    unpinNotificationDrawerAction,
    pinNotificationDrawerAction
  } = useActions();
  return (
    <Button
      icon
      primary={notificationDrawerPinned}
      className={'split-view-button'}
      onClick={() => (
        notificationDrawerPinned
          ? unpinNotificationDrawerAction()
          : pinNotificationDrawerAction()
      )}>
      vertical_split
    </Button>
  );
}

export default SplitViewButton;
