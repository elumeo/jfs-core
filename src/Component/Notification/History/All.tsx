import React from 'react';
import { useSelector } from 'Types/Redux';
import Card from 'Component/Notification/Card';
import Empty from './Empty';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Notification } from 'Types/Notification';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';
import { TransitionGroup } from 'react-transition-group'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
    gap: theme.spacing(1),
    padding: theme.spacing(2, 0)
  },
  item: {
    width: '100%'
  }
}))

const All: React.FC = () => {
  const classes = useStyles()
  const history = useSelector(state => state.Core.Notification.history)
  useSelector(state => state.Core.App.appInitialized)

  if (history.length < 1) {
    return <Empty/>
  }

  return (
    <List className={classes.root}>
      <TransitionGroup>
        {history.map((notification: Notification) => (
          <Collapse key={notification.id}>
            <ListItem className={classes.item}>
              <Card notification={notification} temporary={false}/>
            </ListItem>
          </Collapse>
        ))}
      </TransitionGroup>
    </List>
  );
}

export default All;
