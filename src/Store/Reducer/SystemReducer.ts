import { getRegionFailed, regionLoaded } from '../Action/SystemAction';
import { createReducer, PayloadAction } from 'typesafe-actions';
import { configLoadedAction } from '../Action/ConfigAction';

export interface ISystemReducerState {
  backendRegion: string;
}

const initialState = {
  backendRegion: null,
  pending: false
};

export const systemReducer = createReducer(initialState)
  .handleAction(configLoadedAction, (state) => (
    {...state, pending: true}
  ))
  .handleAction(regionLoaded, (state, action: PayloadAction<string, any>) => (
    {...state, backendRegion: action.payload, pending: false}
  ))
  .handleAction(getRegionFailed, (state) => (
    {...state, pending: false}
  ))
;
