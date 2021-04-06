import React from 'react';
import Button from './Button';
import { useSelector } from 'Types/Redux';
import * as MUI from '@material-ui/core';

const Header: React.FC = () => {
  const username = useSelector(state => state.Core.Session.sessionDTO?.username);
  return (
    <MUI.ListItem>
      <MUI.ListItemIcon>
        <Button iconName="arrow_back"/>
      </MUI.ListItemIcon>
      <MUI.ListItemText primary={username}/>
    </MUI.ListItem>
  );
}

export default Header;
