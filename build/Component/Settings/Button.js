import React from 'react';
import { useSelector } from '../../Types/Redux';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import useActions from '../../Store/useActions';
const Button = () => {
    const { openSettings, closeSettings } = useActions();
    const settingsOpen = useSelector(state => state.Core.Settings.settingsOpen);
    const onClick = React.useCallback(() => {
        settingsOpen
            ? closeSettings()
            : openSettings();
    }, [settingsOpen, closeSettings, openSettings]);
    return (React.createElement(IconButton, { color: 'inherit', onClick: onClick },
        React.createElement(SettingsIcon, null)));
};
export default Button;
