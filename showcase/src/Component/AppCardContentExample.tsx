import React from 'react';
import { Card } from '@mui/material';
import AppNavigation from 'Component/AppNavigation';
import AppCardHeader from '@elumeo/jfs-core/build/Component/Card/AppCardHeader';
import AppCardContent from '@elumeo/jfs-core/build/Component/Card/AppCardContent';
import Layout from '@elumeo/jfs-core/build/Component/App/Layout';


const AppCardContentExample = () => {
  return <Layout navigation={<AppNavigation />}>
    <Card>
      <AppCardHeader title={'AppCardHeader'} />
      <AppCardContent>
        This is some content in a
      </AppCardContent>
    </Card>
  </Layout>
};

export default AppCardContentExample
