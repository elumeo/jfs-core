import React from 'react';
import * as MUI from '@material-ui/core';
import { useSnackbar } from 'notistack';
import * as Type from 'Types/Notification';

export type Props = {
  notification: Type.Notification;
  temporary?: boolean;
};

const DefaultNotificationCard : React.FC<Props> = ({
  notification: {
    title, subtitle, content, action, id
  },
  temporary
}) => {
    const snackbar = useSnackbar();

    return (
      <>
        <MUI.CardContent color='inherit'>
          <MUI.Typography variant='subtitle1'>
            {title}
          </MUI.Typography>
          <MUI.Typography variant='subtitle2'>
            {subtitle}
          </MUI.Typography>
          <MUI.Typography variant='caption'>
            {content}
          </MUI.Typography>
        </MUI.CardContent>
        {!temporary && action && (
          <MUI.CardActions>
            {action(snackbar, id, temporary)}
          </MUI.CardActions>
        )}
      </>
    )
}
export default DefaultNotificationCard
