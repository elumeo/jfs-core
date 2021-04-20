import React from 'react';
import MUICard from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { default as Default } from './Default';
import { useTheme } from '@material-ui/core/styles';
import Icon from './Icon';
import { Notification } from 'Types/Notification';
import useActions from 'Store/useActions';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSnackbar } from 'notistack';

export type Props = {
  notification: Notification;
  temporary: boolean;
};

const Card: React.FC<Props> & { Default: typeof Default; Icon: typeof Icon } = ({
  children,
  notification,
  temporary
}) => {
  const { palette } = useTheme();
  const { removeNotification } = useActions();
  const snackbar = useSnackbar();

  return (
    <MUICard
      style={{
        width: '100%',
        minHeight: 'fit-content',
        backgroundColor: palette[notification.variant]?.['main'],
        color: palette[notification.variant]?.['contrastText']
      }}>
      <CardHeader
        avatar={<Icon variant={notification.variant}/>}
        title={
          <Typography component='h4'>
            {notification.title}
          </Typography>
        }
        subheader={
          <Typography component='h6'>
            {notification.subtitle}
          </Typography>
        }
        subheaderTypographyProps={{ color: 'inherit' }}
        action={
          <CardActions>
            {notification.action
              ? notification.action(snackbar, notification.id, temporary)
              : null}
            <IconButton
              onClick={() => removeNotification(notification.id)}>
              <DeleteIcon
                style={{ color: palette[notification.variant]?.contrastText }}/>
            </IconButton>
          </CardActions>
        }/>
      <CardContent>
        <Typography>
          {notification.content}
          {children}
        </Typography>
      </CardContent>
    </MUICard>
  );
};
Card.Default = Default;
Card.Icon = Icon;

export default Card;
