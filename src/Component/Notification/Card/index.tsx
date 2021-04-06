import React from 'react';
import * as MUI from '@material-ui/core';
import { default as Default } from './Default';
import { useTheme } from '@material-ui/core';
import Icon from './Icon';
import { Notification } from 'Types/Notification';
import useActions from 'Store/useActions';
import * as ICON from '@material-ui/icons';
import { useSnackbar } from 'notistack';

export type Props = {
  notification: Notification;
};

const Card: React.FC<Props> & { Default: typeof Default; Icon: typeof Icon } = ({
  children,
  notification
}) => {
  const { palette } = useTheme();
  const { removeNotification } = useActions();
  const snackbar = useSnackbar();

  return (
    <MUI.Card
      style={{
        width: '100%',
        minHeight: 'fit-content',
        backgroundColor: palette[notification.variant]?.['main'],
        color: palette[notification.variant]?.['contrastText']
      }}>
      <MUI.CardHeader
        avatar={<Icon variant={notification.variant}/>}
        title={
          <MUI.Typography component='h4'>
            {notification.title}
          </MUI.Typography>
        }
        subheader={
          <MUI.Typography component='h6'>
            {notification.subtitle}
          </MUI.Typography>
        }
        subheaderTypographyProps={{ color: 'inherit' }}
        action={
          <MUI.CardActions>
            <MUI.IconButton
              onClick={() => removeNotification(notification.id)}>
              <ICON.Delete
                style={{ color: palette[notification.variant]?.contrastText }}/>
            </MUI.IconButton>
            {notification.action
              ? notification.action(snackbar, notification.id)
              : null}
          </MUI.CardActions>
        }/>
      <MUI.CardContent>
        <MUI.Typography>
          {notification.content}
          {children}
        </MUI.Typography>
      </MUI.CardContent>
    </MUI.Card>
  );
};
Card.Default = Default;
Card.Icon = Icon;

export default Card;
