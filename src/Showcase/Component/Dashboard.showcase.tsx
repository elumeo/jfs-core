import React, { memo } from 'react';
import { Container, Card, Typography } from '@mui/material';
import AppNavigation from './AppNavigation.showcase';
import Layout from '../../Component/App/Layout'
import Header from '../../Component/Card/Header';
import Content from '../../Component/Card/Content';
const Dashboard = () => {
  return (
    <Layout navigation={<AppNavigation />}>
    <Container disableGutters maxWidth={false}>
      <Card>
        <Header title={'Dashboard'} />
        <Content>
          <Typography>This is a showcase about a set of standard components for a Juwelo app and best practises. The standards should be used for new features and apps. Edge cases are allowed,
            but should be avoided.</Typography>
        </Content>
      </Card>
    </Container>
  </Layout>
  );
};

export default memo(Dashboard);
