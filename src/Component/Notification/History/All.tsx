import React from 'react';
import { useSelector } from 'Types/Redux';
import Card from 'Component/Notification/Card';
import Empty from './Empty';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Notification } from 'Types/Notification';
import { Collapse } from '@mui/material';
import { TransitionGroup } from 'react-transition-group'
import definition from 'Component/App/Stateless/Style/Theme/Definition';

const classes = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
    gap: definition.spacing(1),
    padding: definition.spacing(2, 0)
  },

}

const All: React.FC = () => {
  const history = useSelector(state => state.Core.Notification.history)
  useSelector(state => state.Core.App.appInitialized)

  if (history.length < 1) {
    return <Empty />
  }

  return (
    <List sx={classes.root}>
      <TransitionGroup>
        {history.map((notification: Notification) => (
          <Collapse key={notification.id}>
            <ListItem className='hallotest'>
              <Card notification={notification} temporary={false} />
            </ListItem>
          </Collapse>
        ))}
      </TransitionGroup>
    </List>
  );
}

export default All;
