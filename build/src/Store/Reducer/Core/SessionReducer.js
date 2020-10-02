import { createReducer } from 'typesafe-actions';
import { checkSession, authorizeSession, unauthorizeSession } from '../../../../Store/Action/SessionAction';
const initialState = {
    isCheckingSession: false,
    isAuthorized: false,
    sessionDTO: null,
    appProperties: []
};
const Session = createReducer(initialState)
    .handleAction(checkSession, (state) => (Object.assign(Object.assign({}, state), { isCheckingSession: true })))
    .handleAction(authorizeSession, (state, action) => (Object.assign(Object.assign({}, state), { isCheckingSession: false, sessionDTO: action.payload.frontendSessionDTO.session, appProperties: action.payload.frontendSessionDTO.appProperties, isAuthorized: true })))
    .handleAction(unauthorizeSession, (state) => (Object.assign(Object.assign({}, state), { isCheckingSession: false, sessionDTO: null, appProperties: [], isAuthorized: false })));
export default Session;
//# sourceMappingURL=SessionReducer.js.map