import React from 'react';
import { Box, Card, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

export const getAppBarHeight = (theme: Theme) => (parseInt(theme.mixins.toolbar.minHeight.toString()) + theme.spacing(2));

const useStyles = makeStyles(theme => ({
  root: {
    height: 'calc(100% - ' + getAppBarHeight(theme) + 'px)',
    width: 'calc(100% - ' + theme.spacing(2) + 'px)',
    margin: theme.spacing(1),
  },
  menu: {
    width: theme.spacing(50),
  },
}));

const Develop = () => {
  const classes = useStyles();
  return <Grid container className={classes.root}>
    <Grid item className={classes.menu}>
      <Card>
        <List dense>
          <ListItem>
            <ListItemText>Navi 1</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Navi 2</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Navi 3</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Navi 4</ListItemText>
          </ListItem>
        </List>
      </Card>
    </Grid>
    <Grid item xs><Box ml={1}>
      <Box component={Card} height={'100%'}>Content</Box>
    </Box></Grid>
  </Grid>;
};

export default Develop;
