import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip'
import { INotification } from 'Types/Notification';
import { INotificationCardProps } from '.';

export type Props = {
  notification: INotification;
  onClick: (
    notification: INotification,
    ref: React.Component<INotificationCardProps>
  ) => void;
  topLevelRef: React.Component<INotificationCardProps>;
  iconName: string;
  tooltipLabel: string;
}

const CustomActionButton: React.FC<Props> = ({
  notification,
  onClick,
  topLevelRef: ref,
  iconName,
  tooltipLabel
}) => (<Tooltip title={tooltipLabel} >
  <IconButton
    onClick={() => onClick(notification, ref)}>
    {iconName}
  </IconButton>
  </Tooltip>
);

export default CustomActionButton;
