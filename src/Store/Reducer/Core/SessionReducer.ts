import { createReducer, PayloadAction } from 'typesafe-actions';
import JSCApi from 'Jsc/Api';
import {
  checkSession,
  authorizeSession,
  unauthorizeSession
} from 'Action/SessionAction';

type ISessionDTO = JSCApi.DTO.Session.ISessionDTO;
type IPropertyDTO = JSCApi.DTO.Authorization.IPropertyDTO;

namespace Session {
  export type State = {
    isCheckingSession: boolean;
    isAuthorized: boolean;
    sessionDTO: ISessionDTO;
    appProperties: Array<IPropertyDTO>;
  }
}

const initialState: Session.State = {
  isCheckingSession: false,
  isAuthorized: false,
  sessionDTO: null,
  appProperties: []
};

const Session = createReducer<Session.State>(initialState)
  .handleAction(checkSession, (state): Session.State => ({
    ...state,
    isCheckingSession: true
    })
  )
  .handleAction(
    authorizeSession,
    (
      state: Session.State,
      action: PayloadAction<string, authorizeSession.Payload>
    ): Session.State => ({
      ...state,
      isCheckingSession: false,
      sessionDTO: action.payload.frontendSessionDTO.session,
      appProperties: action.payload.frontendSessionDTO.appProperties,
      isAuthorized: true
    })
  )
  .handleAction(
    unauthorizeSession,
    (state: Session.State): Session.State => ({
      ...state,
      isCheckingSession: false,
      sessionDTO: null,
      appProperties: [],
      isAuthorized: false
    })
  );

export default Session;
