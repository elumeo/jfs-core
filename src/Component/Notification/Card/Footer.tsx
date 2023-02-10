import React from 'react';
import { Box, BoxProps, SxProps } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Notification } from 'Types/Notification';
import { useIntl } from 'react-intl';

const httpDetailsStyle: SxProps = { wordBreak: 'break-word' }

type Props = Pick<BoxProps, 'sx'>
  & Pick<Notification, 'timeStamp' | 'httpDetails'>

const Footer: React.FC<Props> = ({ timeStamp, httpDetails, sx }) => {
  const { formatDate, formatTime } = useIntl();
  const formattedTimeStamp = `${formatDate(timeStamp, { dateStyle: 'medium' })} ${formatTime(timeStamp, { timeStyle: 'medium' })}`
  return (
    !httpDetails && !formattedTimeStamp
      ? null :
      <Box sx={sx}>
        {httpDetails && <Typography sx={httpDetailsStyle} variant='caption' component='div'>{httpDetails}</Typography>}
        {formattedTimeStamp && <Typography variant='caption' component='div' noWrap>{formattedTimeStamp}</Typography>}
      </Box>
  )
}

export default Footer
