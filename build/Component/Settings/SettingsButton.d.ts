import React from 'react';
import * as Action from '../../Store/Action';
export declare type ISettingsButtonProps = Partial<typeof Action> & {
    settingsOpen?: boolean;
};
declare const _default: import("react-redux").ConnectedComponent<React.FC<ISettingsButtonProps>, Pick<ISettingsButtonProps, never> & Partial<typeof Action> & {
    settingsOpen?: boolean;
}>;
export default _default;
