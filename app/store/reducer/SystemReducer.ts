import JscApi from '../../base/JscApi';
import { getRegion, regionLoaded, getRegionFailed } from '../action/SystemAction';
import { createReducer, PayloadAction } from "typesafe-actions";
import JSCApi from "../../base/JscApi";

export interface ISystemReducerState {
  backendRegion: string;
}

const initialState = {
  backendRegion: null,
  pending: false
}

export const systemReducer = createReducer(initialState)
  .handleAction(getRegion, (state, action) => ({
    ...state,
    pending: true
  }))
  .handleAction(regionLoaded, (state, action: PayloadAction<string, any>) => ({
    ...state,
    backendRegion: action.payload,
    pending: false
  }))
  .handleAction(getRegionFailed, (state, action) => ({
    ...state,
    pending: false
  }));
