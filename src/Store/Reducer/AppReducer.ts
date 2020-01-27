import { createReducer, PayloadAction } from 'typesafe-actions';
import { appInitialized, initializeApp, IInitializeAppPayload } from '../Action/AppAction';

export interface IAppReducerState {
  appInitialized: boolean;
  allowRobotLogin: boolean;
  packageJson: { version?: string };
}

const initialState: IAppReducerState = {
  appInitialized: false,
  allowRobotLogin: false,
  packageJson: null
};

export const appReducer = createReducer(initialState)
  .handleAction(
    initializeApp,
    (
      state: IAppReducerState,
      action: PayloadAction<string, IInitializeAppPayload>
    ) => ({
    ...state,
    allowRobotLogin: action.payload.allowRobotLogin,
    packageJson: action.payload.packageJson
  }))
  .handleAction(appInitialized, (state: IAppReducerState) => {
    return ({
      ...state,
      appInitialized: true
    })
  });
