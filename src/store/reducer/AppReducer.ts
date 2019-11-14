import { createReducer, PayloadAction } from 'typesafe-actions';
import { appInitialized, initializeApp, IInitializeAppPayload } from '../action/AppAction';

export interface IAppReducerState {
  appInitialized: boolean;
  allowRobotLogin: boolean;
}

const initialState: IAppReducerState = {
  appInitialized: false,
  allowRobotLogin: false
};

export const appReducer = createReducer(initialState)
  .handleAction(
    initializeApp,
    (
      state: IAppReducerState,
      action: PayloadAction<string, IInitializeAppPayload>
    ) => ({
      ...state,
      allowRobotLogin: action.payload.allowRobotLogin
    }))
  .handleAction(appInitialized, (state: IAppReducerState) => {
    return ({
      ...state,
      appInitialized: true
    })
  })
;
