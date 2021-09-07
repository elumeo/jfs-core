import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import { useSnackbar } from 'notistack';
import * as Type from 'Types/Notification';
import { useIntl } from 'react-intl';

export type Props = {
  notification: Type.Notification;
  temporary?: boolean;
};

const DefaultNotificationCard: React.FC<Props> = ({
  notification: {
    title,
    subtitle,
    content,
    action,
    id,
    isTranslationId = false,
    httpDetails,
    timeStamp
  },
  temporary,
}) => {
  const snackbar = useSnackbar();
  const { formatMessage, formatDate, formatTime } = useIntl();
  return (
    <>
      <Box color='inherit'>
        {title && (
          <Typography variant='h6' component='div'>
            {isTranslationId ? formatMessage({ id: title as string }) : title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant='subtitle1' component='div'>
            {isTranslationId
              ? formatMessage({ id: subtitle as string })
              : subtitle}
          </Typography>
        )}
        {content && (
          <Typography variant='body2' component='div'>
            {isTranslationId
              ? formatMessage({ id: content as string })
              : content}
          </Typography>
        )}

        {
          (httpDetails || timeStamp) &&
          <Box pt={0.5}>
            {httpDetails && <Typography variant='caption' component='div'>{httpDetails}</Typography>}
            {timeStamp &&
            <Typography variant='caption' component='div'>
              {formatDate(timeStamp, {dateStyle: 'medium'})}&nbsp;{formatTime(timeStamp, {timeStyle: 'medium'})}
            </Typography>
            }
          </Box>
        }
      </Box>
      {!temporary && action && <CardActions>{action(snackbar, id, temporary)}</CardActions>}
    </>
  );
};

export default DefaultNotificationCard;
