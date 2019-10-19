import { loadConfig, configLoadedAction } from '../action/ConfigAction';
import { createReducer, PayloadAction } from "typesafe-actions";

import { openNavigation, closeNavigation } from '../action/NavigationAction';

export interface INavigationReducerState {
  navigationOpen: boolean;
}

const initialState = {
  navigationOpen: false
};

export const navigationReducer = createReducer(initialState)
  .handleAction(openNavigation, (state: INavigationReducerState) => ({
    ...state,
    navigationOpen: true
  }))
  .handleAction(closeNavigation, (state: INavigationReducerState) => ({
    ...state,
    navigationOpen: false
  }));
