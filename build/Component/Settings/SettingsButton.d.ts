import { closeSettings, openSettings } from '../../Store/Action/SettingsAction';
export interface ISettingsButtonProps {
    settingsOpen?: boolean;
    openSettings?: typeof openSettings;
    closeSettings?: typeof closeSettings;
}
declare const _default: import("react-redux").ComponentClass<ISettingsButtonProps>;
export default _default;
