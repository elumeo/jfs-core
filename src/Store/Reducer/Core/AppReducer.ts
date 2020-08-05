import { createReducer, PayloadAction } from 'typesafe-actions';
import * as AppAction from 'Action/AppAction';

namespace App {
  export type State = {
    appInitialized: boolean;
    allowRobotLogin: boolean;
    packageJson: { version?: string };
  }
}

const initialState: App.State = {
  appInitialized: false,
  allowRobotLogin: false,
  packageJson: null
};

const App = createReducer(initialState)
  .handleAction(
    AppAction.initializeApp,
    (
      state: App.State,
      action: PayloadAction<string, AppAction.initializeApp.Payload>
    ) => ({
      ...state,
      allowRobotLogin: action.payload.allowRobotLogin,
      packageJson: action.payload.packageJson
    })
  )
  .handleAction(
    AppAction.appInitialized,
    state => ({
      ...state,
      appInitialized: true
    })
  );

export default App;
