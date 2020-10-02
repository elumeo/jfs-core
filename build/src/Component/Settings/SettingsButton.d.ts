import React from 'react';
import { closeSettings, openSettings } from '../../Store/Action/SettingsAction';
export interface ISettingsButtonProps {
    settingsOpen?: boolean;
    openSettings?: typeof openSettings;
    closeSettings?: typeof closeSettings;
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<ISettingsButtonProps>, Pick<ISettingsButtonProps, never> & ISettingsButtonProps>;
export default _default;
