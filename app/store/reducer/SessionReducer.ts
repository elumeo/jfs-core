import JscApi from '../../base/JscApi';
import {
  checkLoginAction,
  checkSessionAction,
  sessionIsAuthorizedAction,
  sessionIsUnauthorizedAction,
} from '../action/SessionAction';
import { createReducer, PayloadAction } from "typesafe-actions";
import JSCApi from "../../base/JscApi";
import ISessionDTO = JSCApi.DTO.Session.ISessionDTO;

export interface ISessionReducerState {
  isCheckingSession?: boolean;
  isCheckingLogin?: boolean;
  isAuthorized?: boolean;
  sessionDTO?: JscApi.DTO.Session.ISessionDTO;
}

const initialState: ISessionReducerState = {
  isCheckingSession: true,
  isCheckingLogin: false,
  isAuthorized: false,
  sessionDTO: null
};

export const sessionReducer = createReducer<ISessionReducerState>(initialState)
  .handleAction(sessionIsAuthorizedAction, (state, action: PayloadAction<string, ISessionDTO>): ISessionReducerState => (
    {
      ...state,
      isCheckingSession: false,
      isCheckingLogin: false,
      isAuthorized: true,
      sessionDTO: action.payload
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
      sessionDTO: null
    })
  )
;
