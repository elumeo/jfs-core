import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import NotificationIcon from './NotificationIcon';
import { Notification } from 'Types/Notification'

const sx = {
  width: '100%',
  overflow: 'hidden',
  wordBreak: 'break-word'
}

type Props = Pick<Notification, 'title' | 'subtitle' | 'variant'>

const Header: React.FC<Props> =
  ({
    title,
    subtitle,
    variant
  }) => {
    return (
      !variant && !title && !subtitle
        ? null :
        <CardHeader
          avatar={<NotificationIcon variant={variant} />}
          title={<Typography variant='h5' component='div'>{title}</Typography>}
          subheader={<Typography variant='subtitle1' component='div'>{subtitle}</Typography>}
          subheaderTypographyProps={{ color: 'inherit' }}
          sx={sx}
        />
    )
  }

export default Header
