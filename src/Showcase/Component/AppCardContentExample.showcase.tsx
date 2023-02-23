import React from 'react';
import { Card } from '@mui/material';
import AppNavigation from './AppNavigation.showcase';
import AppCardHeader from '../../Component/Card/AppCardHeader';
import AppCardContent from '../../Component/Card/AppCardContent';
import Layout from '../../Component/App/Layout';


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
