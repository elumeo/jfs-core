import React from 'react';
import { useSelector } from 'Types/Redux';
import * as MUI from '@material-ui/core';
import * as ICON from '@material-ui/icons';
import useActions from 'Store/useActions';

const Button: React.FC = () => {
  const { openSettings, closeSettings } = useActions();
  const settingsOpen = useSelector(state  => state.Core.Settings.settingsOpen);
  return (
    <MUI.IconButton
      color='inherit'
      onClick={() => (
        settingsOpen
          ? closeSettings()
          : openSettings()
      )}>
      <ICON.Settings/>
    </MUI.IconButton>
  )
};

export default Button;
