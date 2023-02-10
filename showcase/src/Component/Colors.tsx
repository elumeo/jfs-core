import React, { memo } from 'react';
import { Box, Card, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material';
import AppNavigation from 'Component/AppNavigation';
import { createStyles, makeStyles, Theme, useTheme } from '@mui/material/styles';
import CodeBox from 'Component/CodeBox';

export const colors = ['primary', 'secondary', 'error', 'warning', 'info', 'rubin', 'rodolith', 'topas', 'apatith', 'peridot', 'citrin', 'quarz'];

const useColorStyle = makeStyles(theme => createStyles({
  TestClass: {
    color: definition.palette.quarz.dark
  }
}));

const Colors = () => {
  const colorStyle = useColorStyle();
  return (<Grid container>
    <Grid item xs={2}><AppNavigation/></Grid>
    <Grid item xs>
      <Container>
        <Grid container direction={'row'} spacing={1}>
          <Grid item>
            <Card>
              <CardHeader title='Juwelo Colors'/>
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
              <CardHeader title='Color Usage'/>
              <CardContent>
                <CodeBox>
                  <Typography style={{color: definition.palette.rubin.main}}>{`<Typography style={{color: definition.palette.rubin.main}}>rubin.main</Typography>`}</Typography>
                  <Typography style={{color: definition.palette.citrin.main}}>{`<Typography style={{color: definition.palette.citrin.main}}>citrin.main</Typography>`}</Typography>
                </CodeBox>
                <CodeBox>
                  <Box marginTop={1}>
                    <Box component={Typography}>{`const useColorStyle = makeStyles(theme => createStyles({`}</Box>
                    <Box pl={1} component={Typography}>{`TestClass: {`}</Box>
                    <Box pl={2} component={Typography}>{`color: definition.palette.quarz.dark`}</Box>
                    <Box>{` }));`}</Box>
                    <Box component={Typography}>{`const colorStyle = useColorStyle()`}</Box>
                    <Typography className={colorStyle.TestClass}>{`<Typography className={colorStyle.TestClass}>quarz.dark</Typography>`}</Typography>
                  </Box>
                </CodeBox>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  </Grid>);
};
export default memo(Colors);
