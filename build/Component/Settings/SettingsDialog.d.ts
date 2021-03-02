import React from 'react';
import * as Action from '../../Store/Action';
import './SettingsDialog.scss';
export declare type ISettingsDialogProps = Partial<typeof Action> & {
    settingsOpen?: boolean;
};
declare const _default: import("react-redux").ConnectedComponent<React.FC<ISettingsDialogProps>, Pick<ISettingsDialogProps, never> & Partial<typeof Action> & {
    settingsOpen?: boolean;
}>;
export default _default;
