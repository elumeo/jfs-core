import * as TA from 'typesafe-actions';
import * as Action from 'Store/Action';

export type State = {
  backendRegion: string;
  pending: boolean;
};

const initialState: State = {
  backendRegion: null,
  pending: false
};

const System = TA.createReducer<State, TA.ActionType<typeof Action>>(initialState)
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
