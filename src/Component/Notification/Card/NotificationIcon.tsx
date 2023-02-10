import { VariantType } from 'notistack';
import React from 'react';
import FontIcon from '@mui/material/Icon';

type Props = {
  variant: VariantType
}
const NotificationIcon: React.FC<Props> = ({ variant }): React.ReactElement | undefined => {
  switch (variant) {
    case 'success':
      return <FontIcon color='inherit'>check</FontIcon>
    case 'error':
    case 'warning':
    case 'info':
      return <FontIcon color='inherit'>{variant}</FontIcon>
    case 'default':
    default:
      return undefined
  }
}
export default NotificationIcon
