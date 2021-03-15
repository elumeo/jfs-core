import React from 'react';
import {  useSelector } from 'Types/Redux';
import * as MUI from '@material-ui/core';
import * as MUIIcon from '@material-ui/icons';
// import * as Action from 'Store/Action';
import useActions from 'Store/Action/useActions';



const SettingsButton: React.FC = () => {
  console.log('he')
  const Action = useActions();
  const settingsOpen = useSelector((state)  => state.Core.Settings.settingsOpen)
  return  <MUI.IconButton
    color='inherit'
    onClick={() => settingsOpen ? Action.closeSettings() : Action.openSettings()}>
    <MUIIcon.Settings />
  </MUI.IconButton>
};


export default SettingsButton;
