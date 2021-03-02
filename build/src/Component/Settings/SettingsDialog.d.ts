import React from 'react';
import { closeSettings } from '../../Store/Action/SettingsAction';
import './SettingsDialog.scss';
export interface ISettingsDialogProps {
    closeSettings?: typeof closeSettings;
    settingsOpen?: boolean;
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<ISettingsDialogProps>, Pick<ISettingsDialogProps, never> & ISettingsDialogProps>;
export default _default;
