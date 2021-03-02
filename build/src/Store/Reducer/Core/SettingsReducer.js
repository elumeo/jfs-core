import { closeSettings, openSettings } from '../../../../Store/Action/SettingsAction';
import { createReducer } from 'typesafe-actions';
const initialState = {
    settingsOpen: false
};
const Settings = createReducer(initialState)
    .handleAction(openSettings, (state) => (Object.assign(Object.assign({}, state), { settingsOpen: true })))
    .handleAction(closeSettings, (state) => (Object.assign(Object.assign({}, state), { settingsOpen: false })));
export default Settings;
//# sourceMappingURL=SettingsReducer.js.map