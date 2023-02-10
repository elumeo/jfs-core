import React, { memo } from 'react';
import { Container, Card, Typography } from '@mui/material';
import AppNavigation from 'Component/AppNavigation';
import Layout from '@elumeo/jfs-core/build/Component/App/Layout'
import AppCardHeader from '@elumeo/jfs-core/build/Component/Card/AppCardHeader';
import AppCardContent from '@elumeo/jfs-core/build/Component/Card/AppCardContent';
const Dashboard = () => {
  return (<Layout navigation={<AppNavigation />}>
    <Container>
      <Card>
        <AppCardHeader title={'Dashboard'} />
        <AppCardContent>
          <Typography>This is a showcase about a set of standard components for a Juwelo app and best practises. The standards should be used for new features and apps. Edge cases are allowed,
            but should be avoided.</Typography>
        </AppCardContent>
      </Card>
    </Container>
  </Layout>
  );
};

export default memo(Dashboard);
