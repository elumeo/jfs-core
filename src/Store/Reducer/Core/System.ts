import { createReducer, PayloadAction } from 'typesafe-actions';
import * as Action from 'Store/Action';
import { ActionType } from 'Types/Redux';

export type State = {
  backendRegion: string;
  pending: boolean;
};

const initialState: State = {
  backendRegion: null,
  pending: false
};

const System = createReducer<State, ActionType>(initialState)
  .handleAction(Action.configLoadedAction, state => ({
    ...state,
    pending: true
  }))
  .handleAction(Action.regionLoaded, (state, action) => ({
    ...state,
    backendRegion: action.payload.regionName,
    pending: false
  }))
  .handleAction(Action.getRegionFailed, state => ({
    ...state,
    pending: false
  }));

export default System;
