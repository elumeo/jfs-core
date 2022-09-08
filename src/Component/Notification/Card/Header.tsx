import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import useIcon from './useicon';
import {Notification} from 'Types/Notification'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(({
  root: {
    width: '100%',
    overflow: 'hidden'
  },
  content: {
    overflow: 'hidden',
    wordBreak: 'break-word'
  }
}))

type Props = Pick<Notification, 'title' | 'subtitle' | 'variant'>

const Header: React.FC<Props> =
  ({
     title,
     subtitle,
     variant
   }) => {
    const classes = useStyles()
    const icon = useIcon(variant)
    return (
      !icon && !title && !subtitle
        ? null :
        <CardHeader
          avatar={icon}
          title={<Typography variant='h6' component='div'>{title}</Typography>}
          subheader={<Typography variant='subtitle1' component='div'>{subtitle}</Typography>}
          subheaderTypographyProps={{color: 'inherit'}}
          classes={classes}
        />
    )
  }

export default React.memo(Header)
