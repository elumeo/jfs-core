import * as TA from 'typesafe-actions';
import * as Action from 'Store/Action';
import { ActionType } from 'Types/Redux';

export type State = {
  appInitialized: boolean;
  packageJson: { version?: string };
};

export const initialState: State = {
  appInitialized: false,
  packageJson: null,
};

const App = TA.createReducer<State, ActionType>(initialState)
  .handleAction(Action.initializeApp, (state, action) => ({
    ...state,
    packageJson: action.payload.packageJson,
  }))
  .handleAction(Action.appInitialized, state => ({
    ...state,
    appInitialized: true,
  }));

export default App;
