import React, { useState } from 'react';
import Layout, { Props as LayoutProps } from 'Component/App/Layout';
import { Button, Card, CardContent } from '@mui/material';
import { AppCardContent, AppCardHeader } from 'Component/Card';

const DevelopAppLayout: React.FC = () => {
  const [view, setView] = useState('singleColumnWithSpacing');
  const layoutProps = React.useMemo<LayoutProps>(() => {
    switch (view) {
      case 'singleColumnWithoutSpacing':
        return {
          spacing: 0
        };
      case 'twoColumnsWithSpacing':
        return {
          navigation: <Card><CardContent>Navigation</CardContent></Card>,
          spacing: 2,
          navigationProps: {
            sx: {
              minWidth: 200
            }
          }
        };
      case 'twoColumnsWithoutSpacing':
        return {
          navigation: <Card><CardContent>Navigation</CardContent></Card>,
          spacing: 0
        };
      default:
        return {
          spacing: 2
        };
    }
  }, [view])
  return <Layout {...layoutProps}>
    <Card sx={{ height: '100%' }}    >
      <AppCardHeader title={'App Layouts'} />
      <AppCardContent >
        <Button onClick={() => setView('singleColumnWithSpacing')}>Single Column With Spacing</Button>
        <Button onClick={() => setView('singleColumnWithoutSpacing')}>Single Column Without Spacing</Button>
        <Button onClick={() => setView('twoColumnsWithSpacing')}>Two Columns With Spacing</Button>
        <Button onClick={() => setView('twoColumnsWithoutSpacing')}>Two Columns Without Spacing</Button>
      </AppCardContent>
    </Card>
  </Layout>
};

export default DevelopAppLayout;
