import React from 'react';
import { Card } from '@mui/material';
import AppNavigation from './AppNavigation.showcase';
import Header from '../../Component/Card/Header';
import Content from '../../Component/Card/Content';
import Layout from '../../Component/App/Layout';


const AppCardContentExample = () => {
  return <Layout navigation={<AppNavigation />}>
    <Card>
      <Header title={'Header'} />
      <Content>
        This is some content in a
      </Content>
    </Card>
  </Layout>
};

export default AppCardContentExample
