import React from 'react';
import  Button  from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import useActions from 'Action/useActions';
import { useSelector } from 'react-redux';
import Global from 'Store/Reducer/Global';

const SplitViewButton: React.FC = () => {
  const notificationDrawerPinned = useSelector<Global.State, boolean>(state => (
    state.Core.Notification.notificationDrawerPinned
  ));
  const {
    unpinNotificationDrawerAction,
    pinNotificationDrawerAction
  } = useActions();
  return (
    <Button
       color={notificationDrawerPinned ? 'primary' : 'secondary'}
      // className={'split-view-button'}
      onClick={() => (
        notificationDrawerPinned
          ? unpinNotificationDrawerAction()
          : pinNotificationDrawerAction()
      )}>
        <Icon>
          vertical_split
        </Icon>
    </Button>
  );
}

export default SplitViewButton;
