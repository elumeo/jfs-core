import React, { memo } from 'react';
import { Card, CardContent, CardHeader, Container, Grid } from '@material-ui/core';
import AppNavigation from 'Component/AppNavigation';
import AddToastButton from 'Component/AddToastButton';
import AddNotificationButton from 'Component/AddNotificationButton';

const Notifications = () => {
  return (<Grid container>
    <Grid item xs={2}><AppNavigation/></Grid>
    <Grid item xs>
      <Container>
        <Card>
          <CardHeader title='Notifications'/>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item><AddToastButton/></Grid>
              <Grid item><AddNotificationButton/></Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Grid>
  </Grid>);
};
export default memo(Notifications);
