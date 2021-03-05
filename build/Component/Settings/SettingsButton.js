import React from 'react';
import { useSelector } from '../../Types/Redux';
import * as MUI from '@material-ui/core';
import * as MUIIcon from '@material-ui/icons';
import useActions from '../../Store/Action/useActions';
const SettingsButton = () => {
    console.log('he');
    const Action = useActions();
    const settingsOpen = useSelector((state) => state.Core.Settings.settingsOpen);
    return React.createElement(MUI.IconButton, { color: 'inherit', onClick: () => settingsOpen ? Action.closeSettings() : Action.openSettings() },
        React.createElement(MUIIcon.Settings, null));
};
export default SettingsButton;
//# sourceMappingURL=SettingsButton.js.map