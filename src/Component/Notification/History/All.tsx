import React from 'react';
import { useSelector } from 'Types/Redux';
import Card from 'Component/Notification/Card';
import Empty from './Empty';
import * as MUI from '@material-ui/core';

export type Props = {

};

const History: React.FC<Props> = () => {
  const history = useSelector(state => state.Core.Notification.history);

  return (
    history.length
      ? (
        <MUI.Box component='div' style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          overflowY: 'scroll'
        }}>
          {history.map(
            notification => (
              <MUI.ListItem key={notification.id} style={{
                width: '100%'
              }}>
                <Card key={`card-${notification.id}`}>
                  {notification.content}
                </Card>
              </MUI.ListItem>
            )
          )}
        </MUI.Box>
      )
      : <Empty/>
  );
}

export default History;
