import React, { memo } from 'react';
import { Box, Card, CardContent, CardHeader, Container, Grid, Typography } from '@material-ui/core';
import AppNavigation from 'Component/AppNavigation';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';

export const colors = ['primary', 'secondary', 'error', 'warning', 'info', 'rubin', 'rodolith', 'topas', 'apatith', 'peridot', 'citrin', 'quarz'];

const useColorStyle = makeStyles(theme => createStyles({
  TestClass: {
    color: theme.palette.quarz.dark
  }
}));

const Colors = () => {
  const theme = useTheme<Theme>();
  const colorStyle = useColorStyle();
  return (<Grid container>
    <Grid item xs={2}>
      <AppNavigation/>
    </Grid>
    <Grid item xs>
      <Box component={Container}>
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
                <Typography style={{color: theme.palette.rubin.main}}>{`<Typography style={{color: theme.palette.rubin.main}}>rubin.main</Typography>`}</Typography>
                <Typography style={{color: theme.palette.citrin.main}}>{`<Typography style={{color: theme.palette.citrin.main}}>citrin.main</Typography>`}</Typography>
                <Box marginTop={1}>
                  <Box component={Typography}>{`const useColorStyle = makeStyles(theme => createStyles({`}</Box>
                  <Box pl={2} component={Typography}>{`TestClass: {`}</Box>
                  <Box pl={4} component={Typography}>{`color: theme.palette.quarz.dark`}</Box>
                  <Box>{` }));`}</Box>
                  <Typography className={colorStyle.TestClass}>{`<Typography className={colorStyle.TestClass}>quarz.dark</Typography>`}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  </Grid>);
};
export default memo(Colors);
