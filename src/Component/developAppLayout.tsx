import React, {useState} from 'react';
import Layout, {Props as LayoutProps} from 'Component/App/Layout';
import {Button, Card, CardContent} from '@material-ui/core';
import {AppCardContent, AppCardHeader} from 'Component/Card';

const DevelopAppLayout: React.FC = () => {
  const [view, setView] = useState('singleColumnWithSpacing');
  const getLayoutArguments = (): {spacing: LayoutProps['spacing'], navigation?: JSX.Element} => {
    switch (view) {
      case 'singleColumnWithoutSpacing':
        return {
          spacing: {
            width: 0,
            height: 0
          }
        };
      case 'twoColumnsWithSpacing':
        return {
          navigation: <Card><CardContent>Navigation</CardContent></Card>,
          spacing: {
            width: 2,
            height: 2.5
          }
        };
      case 'twoColumnsWithoutSpacing':
        return {
          navigation: <Card><CardContent>Navigation</CardContent></Card>,
          spacing: {
            width: 0,
            height: 0
          }
        };
      default:
        return {
          spacing: {
            width: 2,
            height: 2.5
          }
        };
    }
  };
  return <Layout {...getLayoutArguments()}>
    <Card style={{height: '100%'}}>
      <AppCardHeader title={'App Layouts'} />
      <AppCardContent>
        <Button onClick={() => setView('singleColumnWithSpacing')}>Single Column With Spacing</Button>
        <Button onClick={() => setView('singleColumnWithoutSpacing')}>Single Column Without Spacing</Button>
        <Button onClick={() => setView('twoColumnsWithSpacing')}>Two Columns With Spacing</Button>
        <Button onClick={() => setView('twoColumnsWithoutSpacing')}>Two Columns Without Spacing</Button>
      </AppCardContent>
    </Card>
  </Layout>
};

export default DevelopAppLayout;
