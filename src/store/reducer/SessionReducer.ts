import {
  loginAction,
  sessionIsAuthorizedAction,
  sessionIsUnauthorizedAction,
} from '../action/SessionAction';
import { createReducer, PayloadAction } from "typesafe-actions";
import JSCApi from "../../JscApi";
import Session from "../../base/Session";
import ISessionDTO = JSCApi.DTO.Session.ISessionDTO;
import { configLoadedAction } from "../action/ConfigAction";

export interface ISessionReducerState {
  isCheckingLogin: boolean;
  isAuthorized: boolean;
  sessionDTO: JSCApi.DTO.Session.ISessionDTO;
}

const initialState: ISessionReducerState = {
  isCheckingLogin: false,
  isAuthorized: Boolean(Session.getToken()),
  sessionDTO: null,
};

export const sessionReducer = createReducer<ISessionReducerState>(initialState)
  .handleAction(configLoadedAction, (state): ISessionReducerState => (
    { ...state, isCheckingLogin: true }
  ))
  .handleAction(loginAction, (state): ISessionReducerState => (
    { ...state, isCheckingLogin: true }
  ))
  .handleAction(sessionIsAuthorizedAction, (state, action: PayloadAction<string, ISessionDTO>): ISessionReducerState => (
    { ...state, isCheckingLogin: false, sessionDTO: action.payload, isAuthorized: true }
  ))
  .handleAction(sessionIsUnauthorizedAction, (state): ISessionReducerState => (
    { ...state, isCheckingLogin: false, sessionDTO: null, isAuthorized: false }
  ))
;
