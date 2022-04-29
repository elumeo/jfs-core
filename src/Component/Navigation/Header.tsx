import React from 'react';
import Button from './Button';
import { useSelector } from 'Types/Redux';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Header: React.FC = () => {
  const username = useSelector(
    state => state.Core.Session.sessionDTO?.username,
  );
  return (
    <ListItem>
      <ListItemIcon>
        <Button />
      </ListItemIcon>
      <ListItemText primary={username} />
    </ListItem>
  );
};

export default Header;
