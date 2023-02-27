import React from 'react';
import { Box, Card, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material';
import AppNavigation from './AppNavigation.showcase';
import CodeBox from './CodeBox.showcase';
import { quarz, rubin, citrin } from '../../Constant/Color';
import Layout from '../../Component/App/Layout';
export const colors = ['primary', 'secondary', 'error', 'warning', 'info', 'rubin', 'rodolith', 'topas', 'apatith', 'peridot', 'citrin', 'quarz'];

const sx = {
  TestClass: {
    color: quarz.dark
  }
}

const Colors = () => {
  return (
    <Layout navigation={<AppNavigation />}>
      <Container disableGutters maxWidth={false}>
        <Grid container direction={'row'} spacing={1}>
          <Grid item>
            <Card>
              <CardHeader title='Juwelo Colors' />
              <CardContent>
                <Grid container>
                  {colors.map((color, index) => <React.Fragment key={'color_' + index}>
                    <Grid item xs={4}><Box bgcolor={color + '.dark'} color={color + '.contrastText'} p={2}>{color}.dark</Box></Grid>
                    <Grid item xs={4}><Box bgcolor={color + '.main'} color={color + '.contrastText'} p={2}>{color}.main</Box></Grid>
                    <Grid item xs={4}><Box bgcolor={color + '.light'} color={color + '.contrastText'} p={2}>{color}.light</Box></Grid>
                  </React.Fragment>)}

                  <Grid item xs={4}><Box bgcolor='text.primary' color='background.paper' p={2}>text.primary</Box></Grid>
                  <Grid item xs={4}><Box bgcolor='text.secondary' color='background.paper' p={2}>text.secondary</Box></Grid>
                  <Grid item xs={4}><Box bgcolor='text.disabled' color='background.paper' p={2}>text.disabled</Box></Grid>

                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card>
              <CardHeader title='Color Usage' />
              <CardContent>
                <CodeBox>
                  <Typography sx={{ color: rubin.main }}>{`<Typography sx={{color: rubin.main}}>rubin.main</Typography>`}</Typography>
                  <Typography sx={{ color: citrin.main }}>{`<Typography sx={{color: citrin.main}}>citrin.main</Typography>`}</Typography>
                </CodeBox>
                <CodeBox>
                  {`
import { quarz } from 'Core/Constant/Color';
const sx = {
  TestClass: {
    color: quarz.dark
  }
}
`}
                  <Typography sx={sx.TestClass}><Typography sx={sx.TestClass}>{`<Typography sx={sx.TestClass}>quarz.dark</Typography>`}</Typography></Typography>
                </CodeBox>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
export default Colors
