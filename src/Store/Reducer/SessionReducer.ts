import {
  checkSession,
  authorizeSession, IAuthorizeSessionPayload,
  unauthorizeSession
} from '../Action/SessionAction';
import { createReducer, PayloadAction } from 'typesafe-actions';
import JSCApi from '../../JscApi';

type ISessionDTO = JSCApi.DTO.Session.ISessionDTO;
type IPropertyDTO = JSCApi.DTO.Authorization.IPropertyDTO;

export interface ISessionReducerState {
  isCheckingSession: boolean;
  isAuthorized: boolean;
  sessionDTO: ISessionDTO;
  appProperties: Array<IPropertyDTO>;
}

const initialState: ISessionReducerState = {
  isCheckingSession: false,
  isAuthorized: false,
  sessionDTO: null,
  appProperties: []
};

export const sessionReducer = createReducer<ISessionReducerState>(initialState)
  .handleAction(checkSession, (state): ISessionReducerState => ({
    ...state,
    isCheckingSession: true
    })
  )
  .handleAction(
    authorizeSession,
    (
      state: ISessionReducerState,
      action: PayloadAction<string, IAuthorizeSessionPayload>
    ): ISessionReducerState => ({
      ...state,
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
      isCheckingSession: false,
      sessionDTO: null,
      appProperties: [],
      isAuthorized: false
    })
  );
