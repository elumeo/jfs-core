import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import NavigationButton from './NavigationButton';
import { useSelector } from 'react-redux';
import { CardContent, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import Global from 'Store/Reducer/Global';

const NavigationDrawerHeader: React.FC = () => {
  const username = useSelector((state: Global.State) => (
    state.Core?.Session?.sessionDTO?.username
  ))
  return (
    <>
        {/* <CardContent> */}
        <ListItem>
          <ListItemIcon>
          <NavigationButton iconName="arrow_back"/></ListItemIcon>
          <ListItemText primary={username}/>
        </ListItem>
          
        {/* </CardContent> */}
      </>
  );
}

export default NavigationDrawerHeader;
