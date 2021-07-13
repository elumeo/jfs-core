import { createReducer } from 'typesafe-actions';
import JSCApi from 'API/JSC';
import * as Action from 'Store/Action';
import { ActionType } from 'Types/Redux';

type ISessionDTO = JSCApi.DTO.Session.ISessionDTO;
type IPropertyDTO = JSCApi.DTO.Authorization.IPropertyDTO;

export type State = {
  isCheckingSession: boolean;
  isAuthorized: boolean;
  sessionDTO: ISessionDTO;
  appProperties: Array<IPropertyDTO>;
}

const initialState: State = {
  isCheckingSession: false,
  isAuthorized: null,
  sessionDTO: null,
  appProperties: []
};

const Session = createReducer<State, ActionType>(initialState)
  .handleAction(Action.checkSession, (state) => ({
    ...state,
    isCheckingSession: true,
    })
  )
  .handleAction(
    Action.authorizeSession,
    (state, action) => ({
      ...state,
      isCheckingSession: false,
      sessionDTO: action.payload.frontendSessionDTO.session,
      appProperties: action.payload.frontendSessionDTO.appProperties,
      isAuthorized: true
    })
  )
  .handleAction(
    Action.unauthorizeSession,
    state => ({
      ...state,
      isCheckingSession: false,
      sessionDTO: null,
      appProperties: [],
      isAuthorized: false
    })
  );

export default Session;
