import React from 'react';
import Button from './Button';
import { useSelector } from 'Types/Redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Header: React.FC = () => {
  const username = useSelector(state => state.Core.Session.sessionDTO?.username);
  return (
    <ListItem>
      <ListItemIcon>
        <Button/>
      </ListItemIcon>
      <ListItemText primary={username}/>
    </ListItem>
  );
}

export default Header;
