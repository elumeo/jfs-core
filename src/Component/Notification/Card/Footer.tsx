import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Notification } from 'Types/Notification';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';
import { useMemo } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
    gridColumnStart: 1,
    gridColumnEnd: 'none',
    textAlign: 'right'
  }
}))

type Props = Pick<Notification, 'timeStamp' | 'httpDetails'>

const Footer: React.FC<Props> = ({ timeStamp, httpDetails }) => {
  const classes = useStyles()
  const { formatDate, formatTime } = useIntl();
  const formattedTimeStamp = useMemo(() =>
      timeStamp && <>{formatDate(timeStamp, { dateStyle: 'medium' })}&nbsp;{formatTime(timeStamp, { timeStyle: 'medium' })}</>
    , [timeStamp])
  return (
    !httpDetails && !formattedTimeStamp
      ? null :
      <Box className={classes.root}>
        {httpDetails && <Typography variant='caption' component='div'>{httpDetails}</Typography>}
        {formattedTimeStamp && <Typography variant='caption' component='div'>{formattedTimeStamp}</Typography>}
      </Box>
  )
}

export default React.memo(Footer)
