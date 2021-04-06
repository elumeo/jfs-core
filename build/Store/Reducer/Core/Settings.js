import * as Action from '../../Action';
import { createReducer } from 'typesafe-actions';
const initialState = {
    settingsOpen: false
};
const Settings = createReducer(initialState)
    .handleAction(Action.openSettings, state => (Object.assign(Object.assign({}, state), { settingsOpen: true })))
    .handleAction(Action.closeSettings, state => (Object.assign(Object.assign({}, state), { settingsOpen: false })));
export default Settings;
//# sourceMappingURL=Settings.js.map