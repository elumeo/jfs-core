import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import { INotification } from 'Types/Notification';
import { INotificationCardProps } from '.';

export type Props = {
  notification: INotification;
  onClick: (
    notification: INotification,
    ref: React.Component<INotificationCardProps>
  ) => void;
  ref: React.Component<INotificationCardProps>;
  iconName: string;
  tooltipLabel: string;
}

const CustomActionButton: React.FC<Props> = ({
  notification,
  onClick,
  ref,
  iconName,
  tooltipLabel
}) => (
  <Button
    icon
    key='custom-action-btn'
    tooltipLabel={tooltipLabel}
    tooltipPosition={'left'}
    tooltipDelay={666}
    onClick={() => onClick(notification, ref)}>
    {iconName}
  </Button>
);

export default CustomActionButton;
