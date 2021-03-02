import React from 'react';
import {IconButton, Icon} from '@material-ui/core';
import { INotification } from 'Types/Notification';
import { INotificationCardProps } from '.';
import useActions from 'Action/useActions';

export type Props = {
  notification: INotification;
  onClick: (
    notification: INotification,
    ref: React.Component<INotificationCardProps>
  ) => void;
  topLevelRef: React.Component<INotificationCardProps>
}

const HideButton: React.FC<Props> = ({
  notification,
  onClick,
  topLevelRef: ref
}) => {
  const { fadeNotificationOffScreenAction } = useActions();
  return (
    <IconButton
      
      key='hide-btn'
      onClick={event => {
        event.stopPropagation();
        fadeNotificationOffScreenAction(notification.id);
        if (typeof onClick == 'function') {
          onClick(notification, ref);
        }
      }}>
        <Icon>

      arrow_forward
        </Icon>
    </IconButton>
  )
}

export default HideButton;
