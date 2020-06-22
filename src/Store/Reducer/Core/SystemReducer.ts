import { createReducer, PayloadAction } from 'typesafe-actions';
import { getRegionFailed, regionLoaded } from 'Action/SystemAction';
import { configLoadedAction } from 'Action/ConfigAction';

namespace System {
  export type State = {
    backendRegion: string;
    pending: boolean;
  }
}

const initialState: System.State = {
  backendRegion: null,
  pending: false
};

const System = createReducer<System.State>(initialState)
  .handleAction(configLoadedAction, (state) => (
    {...state, pending: true}
  ))
  .handleAction(regionLoaded, (state, action: PayloadAction<string, any>) => (
    {...state, backendRegion: action.payload, pending: false}
  ))
  .handleAction(getRegionFailed, (state) => (
    {...state, pending: false}
  ));

export default System;
