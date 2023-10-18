import React, {useState} from 'react';
import {Box} from '@material-ui/core';
import DevelopInputs from 'Component/DevelopInputs';
import DevelopNotifications from './DevelopNotifications';
import DevelopTables from 'Component/DevelopTables';
import DevelopCurrency from './DevelopCurrency';
import DevelopColors from 'Component/DevelopColors';
import DevelopLists from 'Component/DevelopLists';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core/styles';
import DatePicker from 'Component/DatePicker';

const styles = createStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1, 1),
    }
  }
}))

const Develop: React.FC<WithStyles> = ({classes}) => {
  const [value, setValue] = useState({from: new Date(), to: new Date()});
  return <Box className={classes.root}>
    <DatePicker
      id={'from'}
      onChange={eventValue => {
        console.log('onChange FROM', eventValue)
        setValue({...value, from: eventValue});
      }}
      value={value.from}
    />
    <DatePicker
      id={'to'}
      onChange={eventValue => {
        console.log('onChange TO', eventValue)
        setValue({...value, to: eventValue});
      }}
      value={value.to}
    />
    <DevelopInputs/>
    <DevelopColors/>
    <DevelopNotifications/>
    <DevelopCurrency/>
    <DevelopLists/>
    <DevelopTables/>
  </Box>
}

export default withStyles(styles)(Develop);
