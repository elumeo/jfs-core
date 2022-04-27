import React, { memo } from 'react';
import { Box, CardContent, CardHeader, Typography, Grid, Container, Card } from '@material-ui/core';
import * as Color from '@elumeo/jfs-core/build/Types/Color'
import AppNavigation from 'Component/AppNavigation';
import CodeBox from './CodeBox';
import HelloWorld from '@scharfohnezwiebeln/jfc-hello-world/build/Component/HelloWorld';

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
  return (<Grid container>
      <Grid item xs={2}><AppNavigation/></Grid>
      <Grid item xs>
        <Container>
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
      </Grid>
    </Grid>
  );
};
export default memo(Typographies);
