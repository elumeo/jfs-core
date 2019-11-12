import {
  checkLogin,
  checkSession,
  authorizeSession, IAuthorizeSessionPayload,
  unauthorizeSession,
  loginFailed
} from '../action/SessionAction';
import { createReducer, PayloadAction } from 'typesafe-actions';
import JSCApi from '../../JscApi';
type ISessionDTO = JSCApi.DTO.Session.ISessionDTO;
type IPropertyDTO = JSCApi.DTO.Authorization.IPropertyDTO;

export interface ISessionReducerState {
  isCheckingLogin: boolean;
  isCheckingSession: boolean;
  isAuthorized: boolean;
  sessionDTO: ISessionDTO;
  appProperties: Array<IPropertyDTO>;
}

const initialState: ISessionReducerState = {
  isCheckingLogin: false,
  isCheckingSession: false,
  isAuthorized: false,
  sessionDTO: null,
  appProperties: []
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
      sessionDTO: action.payload.frontendSessionDTO.session,
      appProperties: action.payload.frontendSessionDTO.appProperties,
      isAuthorized: true
    })
  )
  .handleAction(
    unauthorizeSession,
    (state: ISessionReducerState): ISessionReducerState => ({
      ...state,
      isCheckingLogin: false,
      isCheckingSession: false,
      sessionDTO: null,
      appProperties: [],
      isAuthorized: false
    })
  )
  .handleAction(loginFailed, (state): ISessionReducerState => ({
      ...state,
      isCheckingLogin: false
    })
  )
