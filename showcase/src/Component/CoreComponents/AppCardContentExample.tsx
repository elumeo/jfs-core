import React, { memo } from 'react';
import { Box, Card, Grid } from '@material-ui/core';
import AppNavigation from 'Component/AppNavigation';
import AppCardHeader from 'Component/CoreComponents/AppCardHeader';
import AppCardContent from 'Component/CoreComponents/AppCardContent';
import { makeStyles, Theme } from '@material-ui/core/styles';

export const getAppBarHeight = (theme: Theme) => (parseInt(theme.mixins.toolbar.minHeight.toString()) + theme.spacing(2.5));

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 'calc(100% - ' + getAppBarHeight(theme) + 'px)',
    width: 'calc(100% - ' + theme.spacing(2) + 'px)',
    margin: theme.spacing(1)
  }
}));

const AppCardContentExample = () => {
  const classes = useStyles();
  return <Grid container spacing={1}>
    <Grid item xs={2}><AppNavigation /></Grid>
    <Grid item xs>
      <Box className={classes.root}>
        <Card>
          <AppCardHeader title={'AppCardHeader'} />
          <AppCardContent fullHeight>
            This is some content in a
          </AppCardContent>
        </Card>
      </Box>
    </Grid>
  </Grid>;
};

export default memo(AppCardContentExample);
