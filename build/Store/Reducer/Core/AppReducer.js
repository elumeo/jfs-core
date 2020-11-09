import { createReducer } from 'typesafe-actions';
import * as AppAction from 'Action/AppAction';
const initialState = {
    appInitialized: false,
    allowRobotLogin: false,
    packageJson: null
};
const App = createReducer(initialState)
    .handleAction(AppAction.initializeApp, (state, action) => (Object.assign(Object.assign({}, state), { allowRobotLogin: action.payload.allowRobotLogin, packageJson: action.payload.packageJson })))
    .handleAction(AppAction.appInitialized, state => (Object.assign(Object.assign({}, state), { appInitialized: true })));
export default App;
//# sourceMappingURL=AppReducer.js.map