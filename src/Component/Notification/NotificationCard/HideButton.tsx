import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
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
    <Button
      icon
      key='hide-btn'
      onClick={event => {
        event.stopPropagation();
        fadeNotificationOffScreenAction(notification.id);
        if (typeof onClick == 'function') {
          onClick(notification, ref);
        }
      }}>
      arrow_forward
    </Button>
  )
}

export default HideButton;
