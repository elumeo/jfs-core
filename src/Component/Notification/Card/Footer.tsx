import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Notification } from 'Types/Notification';
import { makeStyles } from '@mui/styles';
import { useIntl } from 'react-intl';
import { useMemo } from 'react';
import definition from 'Component/App/Stateless/Style/Theme/Definition';

const useStyles = makeStyles(() => ({
  root: {
    padding: definition.spacing(1, 2),
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
