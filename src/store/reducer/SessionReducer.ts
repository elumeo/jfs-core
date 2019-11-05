import { loginAction, sessionIsAuthorizedAction, sessionIsUnauthorizedAction, } from '../action/SessionAction';
import { createReducer, PayloadAction } from "typesafe-actions";
import JSCApi from "../../JscApi";
import { configLoadedAction } from "../action/ConfigAction";
import ISessionDTO = JSCApi.DTO.Session.ISessionDTO;

export interface ISessionReducerState {
  isCheckingLogin: boolean;
  isCheckingSession: boolean;
  isAuthorized: boolean;
  sessionDTO: JSCApi.DTO.Session.ISessionDTO;
}

const initialState: ISessionReducerState = {
  isCheckingLogin: false,
  isCheckingSession: false,
  isAuthorized: false,
  sessionDTO: null
};

export const sessionReducer = createReducer<ISessionReducerState>(initialState)
  .handleAction(configLoadedAction, (state): ISessionReducerState => (
    { ...state, isCheckingSession: true }
  ))
  .handleAction(loginAction, (state): ISessionReducerState => (
    { ...state, isCheckingLogin: true }
  ))
  .handleAction(sessionIsAuthorizedAction, (state, action: PayloadAction<string, ISessionDTO>): ISessionReducerState => (
    { ...state, isCheckingLogin: false, isCheckingSession: false, sessionDTO: action.payload, isAuthorized: true }
  ))
  .handleAction(sessionIsUnauthorizedAction, (state): ISessionReducerState => (
    { ...state, isCheckingLogin: false, isCheckingSession: false, sessionDTO: null, isAuthorized: false }
  ))
;
