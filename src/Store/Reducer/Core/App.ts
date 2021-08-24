import * as TA from 'typesafe-actions';
import * as Action from 'Store/Action';
import { ActionType } from 'Types/Redux';

export type State = {
  appInitialized: boolean;
  allowRobotLogin: boolean;
  packageJson: { version?: string };
};

export const initialState: State = {
  appInitialized: false,
  allowRobotLogin: false,
  packageJson: null,
};

const App = TA.createReducer<State, ActionType>(initialState)
  .handleAction(Action.initializeApp, (state, action) => ({
    ...state,
    allowRobotLogin: action.payload.allowRobotLogin,
    packageJson: action.payload.packageJson,
  }))
  .handleAction(Action.appInitialized, state => ({
    ...state,
    appInitialized: true,
  }));

export default App;
