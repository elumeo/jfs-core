import * as React from 'react';
import {CSSProperties, useMemo} from 'react';
import Box, {BoxProps} from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {Notification} from 'Types/Notification';
import {useIntl} from 'react-intl';

const httpDetailsStyle: CSSProperties = {wordBreak: 'break-word'}

type Props = Pick<BoxProps, 'className'>
  & Pick<Notification, 'timeStamp' | 'httpDetails'>

const Footer: React.FC<Props> = ({timeStamp, httpDetails, className}) => {
  const {formatDate, formatTime} = useIntl();
  const formattedTimeStamp = useMemo(() =>
      timeStamp && <>{formatDate(timeStamp, {dateStyle: 'medium'})}&nbsp;{formatTime(timeStamp, {timeStyle: 'medium'})}</>
    , [timeStamp])
  return (
    !httpDetails && !formattedTimeStamp
      ? null :
      <Box className={className}>
        {httpDetails && <Typography style={httpDetailsStyle} variant='caption' component='div'>{httpDetails}</Typography>}
        {formattedTimeStamp && <Typography variant='caption' component='div'>{formattedTimeStamp}</Typography>}
      </Box>
  )
}

export default React.memo(Footer)
