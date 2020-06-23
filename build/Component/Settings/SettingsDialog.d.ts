import { closeSettings } from '../../Store/Action/SettingsAction';
import './SettingsDialog.scss';
export interface ISettingsDialogProps {
    closeSettings?: typeof closeSettings;
    settingsOpen?: boolean;
}
declare const _default: import("react-redux").ComponentClass<ISettingsDialogProps>;
export default _default;
