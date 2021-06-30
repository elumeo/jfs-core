import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardActions from '@material-ui/core/CardActions';
import { useSnackbar } from 'notistack';
import * as Type from 'Types/Notification';
import { useIntl } from 'react-intl'
export type Props = {
  notification: Type.Notification;
  temporary?: boolean;
};

const DefaultNotificationCard: React.FC<Props> = ({
  notification: {
    title, subtitle, content, action, id, isTranslationId = false
  },
  temporary
}) => {
  const snackbar = useSnackbar();
  const { formatMessage } = useIntl()
  return (
    <>
      <Box component={CardContent} color='inherit'>
        <Typography
          variant='subtitle1'
          component='span'>
          {isTranslationId ? formatMessage({ id: (title as string) }) : title}
        </Typography>
        <Typography
          variant='subtitle2'
          component='span'>
          {isTranslationId ? formatMessage({ id: (subtitle as string) }) : subtitle}
        </Typography>
        <Typography
          variant='body1'
          component='span'>
          {isTranslationId ? formatMessage({ id: (title as string) }) : content}
        </Typography>
      </Box>
      {!temporary && action && (
        <CardActions>
          {action(snackbar, id, temporary)}
        </CardActions>
      )}
    </>
  )
}
export default DefaultNotificationCard
