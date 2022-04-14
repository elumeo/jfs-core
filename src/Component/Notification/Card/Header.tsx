import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import useIcon from './useicon';
import { Notification } from 'Types/Notification'

type Props = Pick<Notification, 'title' | 'subtitle' | 'variant'>

const Header: React.FC<Props> =
  ({
     title,
     subtitle,
     variant
   }) => {
    const icon = useIcon(variant)
    return (
      !icon && !title && !subtitle
        ? null :
        <CardHeader
          avatar={icon}
          title={<Typography variant='h6' component='div'>{title}</Typography>}
          subheader={<Typography variant='subtitle1' component='div'>{subtitle}</Typography>}
          subheaderTypographyProps={{ color: 'inherit' }}
        />
    )
  }

export default React.memo(Header)
