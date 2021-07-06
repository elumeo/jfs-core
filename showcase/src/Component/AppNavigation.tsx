import React, { memo } from 'react';
import { Card, CardContent, List, ListItem } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router';

const AppNavigation = ({history}: RouteComponentProps) => {
  return <Card>
      <CardContent>
        <List>
          <ListItem button onClick={() => history.push('/ExternalLinks')}>External Links</ListItem>
          <ListItem button onClick={() => history.push('/Icons')}>Icons</ListItem>
          <ListItem button onClick={() => history.push('/Colors')}>Colors</ListItem>
          <ListItem button onClick={() => history.push('/Typo')}>Typo</ListItem>
          <ListItem button onClick={() => history.push('/Lists')}>Lists</ListItem>
          <ListItem button onClick={() => history.push('/Buttons')}>Buttons</ListItem>
          <ListItem button onClick={() => history.push('/Tables')}>Tables</ListItem>
          <ListItem button onClick={() => history.push('/Dialogs')}>Dialog</ListItem>
          <ListItem button onClick={() => history.push('/Notifications')}>Notifications</ListItem>
        </List>
      </CardContent>
    </Card>;
};
export default withRouter(memo(AppNavigation));
