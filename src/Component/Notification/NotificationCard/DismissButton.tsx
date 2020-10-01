import React from 'react';
import { INotification } from 'Types/Notification';
import { INotificationCardProps } from '.';
import Button from 'react-md/lib/Buttons/Button';
import useActions from 'Action/useActions';

export type Props = {
  notification: INotification;
  onClick: (
    notification: INotification,
    ref: React.Component<INotificationCardProps>
  ) => void;
  ref: React.Component<INotificationCardProps>;
}

const DismissButton: React.FC<Props> = ({ notification, onClick, ref }) => {
  const { dismissNotificationAction } = useActions();
  return (
    <Button
      icon
      key='dismiss-btn'
      onClick={event => {
        event.stopPropagation();
        dismissNotificationAction(notification.id);
        if (typeof onClick == 'function') {
          onClick(notification, ref);
        }
      }}>
      close
    </Button>
  )
};

export default DismissButton;
