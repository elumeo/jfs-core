import {
  checkLoginAction,
  checkSessionAction,
  sessionIsAuthorizedAction,
  sessionIsUnauthorizedAction,
} from '../action/SessionAction';
import { createReducer, PayloadAction } from "typesafe-actions";
import JSCApi from "../../JscApi";
import Session from "../../base/Session";
import ISessionDTO = JSCApi.DTO.Session.ISessionDTO;

export interface ISessionReducerState {
  isCheckingSession?: boolean;
  isCheckingLogin?: boolean;
  isAuthorized?: boolean;
  sessionDTO?: JSCApi.DTO.Session.ISessionDTO;
  sessionStateRevalidated?: boolean;
}

const initialState: ISessionReducerState = {
  isCheckingSession: false,
  isCheckingLogin: false,
  isAuthorized: Boolean(Session.getToken()),
  sessionDTO: null,
  sessionStateRevalidated: false
};

export const sessionReducer = createReducer<ISessionReducerState>(initialState)
  .handleAction(sessionIsAuthorizedAction, (state, action: PayloadAction<string, ISessionDTO>): ISessionReducerState => (
    {
      ...state,
      isCheckingSession: false,
      isCheckingLogin: false,
      isAuthorized: true,
      sessionDTO: action.payload,
      sessionStateRevalidated: true
    }
  ))
  .handleAction(checkSessionAction, (state): ISessionReducerState => (
    {...state, isCheckingSession: true}
  ))
  .handleAction(checkLoginAction, (state): ISessionReducerState => (
      {...state, isCheckingLogin: true}
    )
  )
  .handleAction(sessionIsUnauthorizedAction, (state): ISessionReducerState => (
    {
      ...state,
      isCheckingSession: false,
      isCheckingLogin: false,
      isAuthorized: false,
      sessionDTO: null,
      sessionStateRevalidated: true
    })
  )
;
