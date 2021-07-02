import * as TA from 'typesafe-actions';
import * as Action from '../../../../Store/Action';
export const initialState = {
    appInitialized: false,
    allowRobotLogin: false,
    packageJson: null
};
const App = TA.createReducer(initialState)
    .handleAction(Action.initializeApp, (state, action) => (Object.assign(Object.assign({}, state), { allowRobotLogin: action.payload.allowRobotLogin, packageJson: action.payload.packageJson })))
    .handleAction(Action.appInitialized, state => (Object.assign(Object.assign({}, state), { appInitialized: true })));
export default App;
