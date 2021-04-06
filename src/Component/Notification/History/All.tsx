import React from 'react';
import { useSelector } from 'Types/Redux';
import Card from 'Component/Notification/Card';
import Empty from './Empty';
import * as MUI from '@material-ui/core';
import useActions from 'Store/useActions';
import {Notification} from 'Types/Notification'
import { useTheme } from '@material-ui/core';

const All: React.FC = () => {
  const history = useSelector(state => state.Core.Notification.history);
  useSelector(state => state.Core.App.appInitialized);

  return (
    history.length
      ? (
        <MUI.Box
          component='div'
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            overflowY: 'scroll',
            gap: '8px',
          }}>
          {history.map((notification: Notification) => (
            <MUI.ListItem
              key={notification.id}
              style={{ width: '100%' }}>
              <Card notification={notification}/>
            </MUI.ListItem>
          ))}
        </MUI.Box>
      )
      : <Empty/>
  );
};

export default All;
