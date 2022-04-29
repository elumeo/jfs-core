import React from 'react';
import { useSelector } from 'Types/Redux';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch } from 'react-redux';
import { closeSettings, openSettings } from 'Store/Action';

const Button: React.FC = () => {
  const dispatch = useDispatch()
  const settingsOpen = useSelector(state => state.Core.Settings.settingsOpen);
  const onClick = React.useCallback(() => {
    dispatch(settingsOpen ? closeSettings() : openSettings());
  }, [settingsOpen, dispatch]);
  return (
    <IconButton color='inherit' onClick={onClick}>
      <SettingsIcon />
    </IconButton>
  );
};

export default Button;
