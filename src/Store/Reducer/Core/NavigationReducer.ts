import { createReducer } from 'typesafe-actions';

import { openNavigation, closeNavigation } from '../../Action/NavigationAction';

namespace Navigation {
  export type State = {
    navigationOpen: boolean;
  }
}

const initialState: Navigation.State = {
  navigationOpen: false
};

const Navigation = createReducer(initialState)
  .handleAction(openNavigation, (state: Navigation.State) => ({
    ...state,
    navigationOpen: true
  }))
  .handleAction(closeNavigation, (state: Navigation.State) => ({
    ...state,
    navigationOpen: false
  }));

export default Navigation;
