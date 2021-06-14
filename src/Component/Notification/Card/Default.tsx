import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
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
        <CardContent color='inherit'>
          <Typography variant='subtitle1' component='span'>
            {title}
          </Typography>
          <Typography variant='subtitle2' component='span'>
            {subtitle}
          </Typography>
          <Typography variant='body1' component='span'> 
            {content}
          </Typography>
        </CardContent>
        {!temporary && action && (
          <CardActions>
            { action(snackbar, id, temporary) }
          </CardActions>
        )}
      </>
    )
}
export default DefaultNotificationCard
