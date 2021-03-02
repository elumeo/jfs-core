import React from 'react';
import NavigationButton from './NavigationButton';
import { useSelector } from 'Types/Redux';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const NavigationDrawerHeader: React.FC = () => {
  const username = useSelector(state => (
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
