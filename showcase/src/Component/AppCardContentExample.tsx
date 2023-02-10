import React, { memo } from 'react';
import { Box, Card, Grid } from '@mui/material';
import AppNavigation from 'Component/AppNavigation';
import AppCardHeader from '@elumeo/jfs-core/build/Component/Card/AppCardHeader';
import AppCardContent from '@elumeo/jfs-core/build/Component/Card/AppCardContent';
import { makeStyles, Theme } from '@mui/material/styles';

export const getAppBarHeight = (parseInt(theme.mixins.toolbar.minHeight.toString()) + definition.spacing(2.5));

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 'calc(100% - ' + getAppBarHeight(theme) + 'px)',
    width: 'calc(100% - ' + definition.spacing(2) + 'px)',
    margin: definition.spacing(1)
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
