import { createReducer } from 'typesafe-actions';
import { openNavigation, closeNavigation } from '../../Action/NavigationAction';
const initialState = {
    navigationOpen: false
};
const Navigation = createReducer(initialState)
    .handleAction(openNavigation, (state) => (Object.assign(Object.assign({}, state), { navigationOpen: true })))
    .handleAction(closeNavigation, (state) => (Object.assign(Object.assign({}, state), { navigationOpen: false })));
export default Navigation;
//# sourceMappingURL=NavigationReducer.js.map