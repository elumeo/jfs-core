import React, { memo } from 'react';
import { Box, CardContent, CardHeader, Typography, Grid, Container, Card } from '@mui/material';
import * as Color from '@elumeo/jfs-core/build/Types/Color'
import AppNavigation from 'Component/AppNavigation';
import CodeBox from './CodeBox';
import HelloWorld from '@scharfohnezwiebeln/jfc-hello-world/build/Component/HelloWorld';
import Layout from '@elumeo/jfs-core/build/Component/App/Layout'

export const colors: Color.Typography[] = [
  'initial' as Color.Typography,
  'inherit' as Color.Typography,
  'primary' as Color.Typography,
  'secondary' as Color.Typography,
  'textPrimary',
  'textSecondary',
  'error',
]
const Typographies = () => {
  return (
    <Layout navigation={<AppNavigation/>}>
        <Container disableGutters maxWidth={false}>
          <Grid container direction={'column'} spacing={1}>
            <Grid item>
              <Card>
                <CardHeader title='Shared Component'/>
                <CardContent>
                  <Box>
                    <Typography>Below we show how to implement a shared component with the example of the <CodeBox component={'span'} size={'small'}>HelloWorld</CodeBox> JFC component</Typography>
                    <Typography>
                      Import: <CodeBox component={'span'} size={'small'}>{'import HelloWorld from \'@scharfohnezwiebeln/jfc-hello-world/build/Component/HelloWorld\';'}</CodeBox>
                    </Typography>
                    <Typography>
                      Use: <CodeBox component={'span'} size={'small'}>{'<HelloWorld />'}</CodeBox>
                    </Typography>
                    <HelloWorld />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
  </Layout>
  );
};
export default memo(Typographies);
