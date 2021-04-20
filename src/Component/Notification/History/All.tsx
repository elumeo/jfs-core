import React from 'react';
import { useSelector } from 'Types/Redux';
import Card from 'Component/Notification/Card';
import Empty from './Empty';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import { Notification } from 'Types/Notification';

const All: React.FC = () => {
  const history = useSelector(state => state.Core.Notification.history);
  useSelector(state => state.Core.App.appInitialized);

  return (
    history.length
      ? (
        <Box
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
            <ListItem
              key={notification.id}
              style={{ width: '100%' }}>
              <Card notification={notification} temporary={false}/>
            </ListItem>
          ))}
        </Box>
      )
      : <Empty/>
  );
};

export default All;
