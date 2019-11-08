import {
  checkLogin,
  checkSession,
  authorizeSession, IAuthorizeSessionPayload,
  unauthorizeSession
} from '../action/SessionAction';
import { createReducer, PayloadAction } from 'typesafe-actions';
import JSCApi from '../../JscApi';
import Session from '../../base/Session';
import { configLoadedAction } from '../action/ConfigAction';
import IFrontendSessionDTO = JSCApi.DTO.Session.IFrontendSessionDTO;

export interface ISessionReducerState {
  isCheckingLogin: boolean;
  isCheckingSession: boolean;
  isAuthorized: boolean;
  frontendSessionDTO: IFrontendSessionDTO;
}

const initialState: ISessionReducerState = {
  isCheckingLogin: false,
  isCheckingSession: false,
  isAuthorized: false,
  frontendSessionDTO: null,
};

export const sessionReducer = createReducer<ISessionReducerState>(initialState)
  .handleAction(checkLogin, (state): ISessionReducerState => (
    { ...state,
      isCheckingLogin: true }
  ))
  .handleAction(checkSession, (state): ISessionReducerState => (
    { ...state,
      isCheckingSession: true }
  ))
  .handleAction(
    authorizeSession,
    (
      state: ISessionReducerState,
      action: PayloadAction<string, IAuthorizeSessionPayload>
    ): ISessionReducerState => ({
      ...state,
      isCheckingLogin: false,
      isCheckingSession: false,
      frontendSessionDTO: action.payload.frontendSessionDTO,
      isAuthorized: true
    })
  )
  .handleAction(
    unauthorizeSession,
    (state: ISessionReducerState): ISessionReducerState => ({
      ...state,
      isCheckingLogin: false,
      isCheckingSession: false,
      frontendSessionDTO: null,
      isAuthorized: false
    })
  )
;
