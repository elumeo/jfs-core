import React from 'react';
import { INotification } from 'Types/Notification';
import { INotificationCardProps } from '.';
import {IconButton, Icon} from '@material-ui/core'
import useActions from 'Action/useActions';

export type Props = {
  notification: INotification;
  onClick: (
    notification: INotification,
    ref: React.Component<INotificationCardProps>
  ) => void;
  topLevelRef: React.Component<INotificationCardProps>;
}

const DismissButton: React.FC<Props> = ({
  notification,
  onClick,
  topLevelRef: ref
}) => {
  const { dismissNotificationAction } = useActions();
  return (
    <IconButton
      // icon
      // key='dismiss-btn'
      onClick={event => {
        event.stopPropagation();
        dismissNotificationAction(notification.id);
        if (typeof onClick == 'function') {
          onClick(notification, ref);
        }
      }}>
     <Icon> close</Icon>
    </IconButton>
  )
};

export default DismissButton;
