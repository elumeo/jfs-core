import React from 'react';
import { useSelector } from 'Types/Redux';
import Card from 'Component/Notification/Card';
import Empty from './Empty';
import * as MUI from '@material-ui/core';
import * as ICONS from '@material-ui/icons';
import useActions from 'Store/Action/useActions';
import {Notification} from 'Types/Notification'
import {   useTheme } from '@material-ui/core';
export type Props = {};


const History: React.FC<Props> = () => {
  const history = useSelector(state => state.Core.Notification.history);
  const { removeNotification } = useActions();
  const {palette} = useTheme();
  return history.length ? (
    <MUI.Box
      component='div'
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        gap: '8px',
      }}
    >
      {history.map((notification: Notification) => {
  
        return (
        // <MUI.ListItem
        //   key={notification.id}
        //   style={{
        //     width: '100%'
        //   }}
        // >
          <Card
            // variant={notification.variant}
            key={`card-${notification.id}`}
            // children={notification.content}
            notification={notification}
            actions={[
              <MUI.IconButton
                onClick={() => removeNotification(notification.id)}
                key={`notification__icon-btn__cancel--${notification.id}`}
              >
                <ICONS.Delete key={`notification__icon__cancel--${notification.id}`}  style={{color: palette?.[notification.variant]?.['contrastText']}}/>
              </MUI.IconButton>]
            }
           />
          // <Card
          //   key={`card-${notification.id}`}
          //   actions={[
              // <MUI.IconButton
              //   onClick={() => removeNotification(notification.id)}
              //   key={`notification__icon-btn__cancel--${notification.id}`}
              // >
              //   {' '}
              //   <ICONS.Cancel key={`notification__icon__cancel--${notification.id}`} />
              // </MUI.IconButton>
          //   ]}
          // >
          //   <MUI.Typography>{notification.content}</MUI.Typography>
          // </Card>
        // </MUI.ListItem>
      )}
      )}
    </MUI.Box>
  ) : (
    <Empty />
  );
};

export default History;
