import React from 'react';
import { Box } from '@material-ui/core';
import DevelopInputs from 'Component/DevelopInputs';
import DevelopNotifications from './DevelopNotifications';
import DevelopTables from 'Component/DevelopTables';
import DevelopCurrency from './DevelopCurrency';
import DevelopColors from 'Component/DevelopColors';
import DevelopLists from 'Component/DevelopLists';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';

const styles = createStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1, 1),
    }
  }
}))

const Develop: React.FC<WithStyles> = ({ classes }) =>
  <Box className={classes.root}>
    <DevelopInputs/>
    <DevelopColors/>
    <DevelopNotifications/>
    <DevelopCurrency/>
    <DevelopLists/>
    <DevelopTables/>
  </Box>

export default withStyles(styles)(Develop);
