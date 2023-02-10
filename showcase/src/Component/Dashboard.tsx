import React, { memo } from 'react';
import { CardContent, Grid, Container, CardHeader, Card, Typography } from '@mui/material';
import AppNavigation from 'Component/AppNavigation';

const Dashboard = () => {
  return (<Grid container>
      <Grid item xs={2}><AppNavigation/></Grid>
      <Grid item xs>
        <Container>
          <Card>
            <CardHeader title={'Dashboard'}/>
            <CardContent>
              <Typography>This is a showcase about a set of standard components for a Juwelo app and best practises. The standards should be used for new features and apps. Edge cases are allowed,
                but should be avoided.</Typography>
            </CardContent>
          </Card>
        </Container>
      </Grid>
    </Grid>
  );
};

export default memo(Dashboard);
