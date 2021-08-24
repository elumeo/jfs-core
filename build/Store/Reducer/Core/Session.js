import { createReducer } from 'typesafe-actions';
import * as Action from '../../Action';
const initialState = {
    isCheckingSession: false,
    isAuthorized: null,
    sessionDTO: null,
    appProperties: [],
};
const Session = createReducer(initialState)
    .handleAction(Action.checkSession, state => (Object.assign(Object.assign({}, state), { isCheckingSession: true })))
    .handleAction(Action.authorizeSession, (state, action) => (Object.assign(Object.assign({}, state), { isCheckingSession: false, sessionDTO: action.payload.frontendSessionDTO.session, appProperties: action.payload.frontendSessionDTO.appProperties, isAuthorized: true })))
    .handleAction(Action.unauthorizeSession, state => (Object.assign(Object.assign({}, state), { isCheckingSession: false, sessionDTO: null, appProperties: [], isAuthorized: false })));
export default Session;
