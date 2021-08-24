import React from 'react';
import MUICard from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { default as Default } from './Default';
import { useTheme } from '@material-ui/core/styles';
import Icon from './Icon';
import { Notification } from 'Types/Notification';
import useActions from 'Store/useActions';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSnackbar } from 'notistack';
import { useIntl } from 'react-intl';

export type Props = {
  notification: Notification;
  temporary: boolean;
};

type Severity = 'error' | 'success' | 'warning' | 'info';

const Card: React.FC<Props> & {
  Default: typeof Default;
  Icon: typeof Icon;
} = ({ children, notification, temporary }) => {
  const { palette } = useTheme();
  const { removeNotification } = useActions();
  const snackbar = useSnackbar();
  const { formatMessage } = useIntl();
  return (
    <MUICard
      style={{
        width: '100%',
        minHeight: 'fit-content',
        backgroundColor: palette[notification.variant as Severity]?.['main'],
        color: palette[notification.variant as Severity]?.['contrastText'],
      }}>
      <CardHeader
        avatar={<Icon variant={notification.variant} />}
        title={
          <Typography variant='h4' component='span'>
            {notification?.isTranslationId
              ? formatMessage({ id: notification.title as string })
              : notification.title}
          </Typography>
        }
        subheader={
          <Typography variant='h6' component='span'>
            {notification?.isTranslationId
              ? formatMessage({ id: notification.subtitle as string })
              : notification.subtitle}
          </Typography>
        }
        subheaderTypographyProps={{ color: 'inherit' }}
        action={
          <CardActions>
            {notification.action
              ? notification.action(snackbar, notification.id, temporary)
              : null}
            <IconButton onClick={() => removeNotification(notification.id)}>
              <DeleteIcon
                style={{
                  color:
                    palette[notification.variant as Severity]?.contrastText,
                }}
              />
            </IconButton>
          </CardActions>
        }
      />
      <Box component={CardContent} pt={0}>
        <Typography component='span'>
          {notification?.isTranslationId
            ? formatMessage({ id: notification.content as string })
            : notification.content}
          {children}
        </Typography>
      </Box>
    </MUICard>
  );
};
Card.Default = Default;
Card.Icon = Icon;

export default Card;
