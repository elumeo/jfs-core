import React from 'react';
import Typography from '@material-ui/core/Typography';
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
      <div style={{color: 'inherit'}}>
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
          <div style={{padding: '4px'}}>
            {httpDetails && <Typography variant='caption' component='div'>{httpDetails}</Typography>}
            {timeStamp &&
            <Typography variant='caption' component='div'>
              {formatDate(timeStamp, {dateStyle: 'medium'})}&nbsp;{formatTime(timeStamp, {timeStyle: 'medium'})}
            </Typography>
            }
          </div>
        }
      </div>
      {!temporary && action && <CardActions>{action(snackbar, id, temporary)}</CardActions>}
    </>
  );
};

export default DefaultNotificationCard;
