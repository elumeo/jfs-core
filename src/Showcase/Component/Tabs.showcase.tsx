import React, { memo } from 'react';
import AppNavigation from './AppNavigation.showcase';
import { Box, Card, CardContent, CardHeader, Container, FormControlLabel, FormLabel, Radio, RadioGroup, Tab, Tabs, Typography } from '@mui/material';
import CodeBox from './CodeBox.showcase';
import Switch from '@mui/material/Switch';
import Layout from '../../Component/App/Layout'

const TabsDemo = () => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const [currentVariant, setCurrentVariant] = React.useState<'standard' | 'scrollable' | 'fullWidth'>('standard');
  const [showMoreTabs, setShowMoreTabs] = React.useState(false);
  const [showMultilineTabText, setShowMultilineTabText] = React.useState(false);

  const toggleShowMoreTabs = () => {
    setCurrentTab(0);
    setShowMoreTabs(!showMoreTabs);
  }
  const toggleShowMultilineTabText = () => setShowMultilineTabText(!showMultilineTabText);
  const handleTabChange = (event: React.ChangeEvent<unknown>, newValue: number) => setCurrentTab(newValue);
  const handleVariantChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTab(0);
    setCurrentVariant(((event.target as HTMLInputElement).value as 'standard' | 'scrollable' | 'fullWidth'));
  }

  return (
    <Layout navigation={<AppNavigation />}>
    <Container disableGutters maxWidth={false}>
      <Card>
        <CardHeader title='Tabs' />
        <CardContent>
          <Typography>Tabs do have variants as well: <CodeBox component={'span'} size={'small'}>standard</CodeBox>, <CodeBox component={'span'}
            size={'small'}>scrollable</CodeBox> or <CodeBox
              component={'span'} size={'small'}>fullWidth</CodeBox></Typography>
          <Box mt={2} mb={2}>
            <FormLabel component='legend'>Variant</FormLabel>
            <RadioGroup row aria-label='variant' name='variant' value={currentVariant} onChange={handleVariantChange}>
              <FormControlLabel value='standard' control={<Radio />} label='Standard' />
              <FormControlLabel value='scrollable' control={<Radio />} label='Scrollable' />
              <FormControlLabel value='fullWidth' control={<Radio />} label='Full width' />
            </RadioGroup>
            <FormControlLabel control={<Switch onChange={toggleShowMoreTabs} checked={showMoreTabs} />} label='Show more Tabs' />
            <FormControlLabel control={<Switch onChange={toggleShowMultilineTabText} checked={showMultilineTabText} />} label='Show multiline Tab title' />
          </Box>
          <Tabs value={currentTab} variant={currentVariant} onChange={handleTabChange} aria-label='simple tabs example'>
            <Tab label='Item One' id={'tab0'} />
            <Tab label={showMultilineTabText ? 'Item Two with a long, long, long, long, long, long, long, long, long, long text' : 'Item Two'} wrapped={showMultilineTabText}
              id={'tab1'} />
            <Tab
              label={showMultilineTabText ? 'Item Three with a long, long, long, long, long, long, long, long, long, long, long, long, long, long, long, long text' : 'Item Three'}
              wrapped={showMultilineTabText} id={'tab2'} />
            {showMoreTabs && <Tab label='Item Four' id={'tab3'} />}
            {showMoreTabs && <Tab label='Item Five' id={'tab4'} />}
            {showMoreTabs && <Tab label='Item Six' id={'tab5'} />}
            {showMoreTabs && <Tab label='Item Seven' id={'tab6'} />}
            {showMoreTabs && <Tab label='Item Eight' id={'tab7'} />}
            {showMoreTabs && <Tab label='Item Nine' id={'tab8'} />}
            {showMoreTabs && <Tab label='Item Ten' id={'tab9'} />}
          </Tabs>
        </CardContent>
      </Card>
    </Container>
  </Layout>
  );
};
export default memo(TabsDemo);
