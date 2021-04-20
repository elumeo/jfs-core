import React from 'react';
import { useSelector } from 'Types/Redux';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import useActions from 'Store/useActions';

const Button: React.FC = () => {
  const { openSettings, closeSettings } = useActions();
  const settingsOpen = useSelector(state  => state.Core.Settings.settingsOpen);
  return (
    <IconButton
      color='inherit'
      onClick={() => (
        settingsOpen
          ? closeSettings()
          : openSettings()
      )}>
      <SettingsIcon/>
    </IconButton>
  )
};

export default Button;
