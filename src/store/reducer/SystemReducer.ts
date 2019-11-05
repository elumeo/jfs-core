import { getRegionFailed, regionLoaded, setLoginDialogVisibilityAction } from '../action/SystemAction';
import { createReducer, PayloadAction } from "typesafe-actions";
import { configLoadedAction } from "../action/ConfigAction";

export interface ISystemReducerState {
  pending: boolean;
  backendRegion: string;
  loginDialogVisible: boolean;
}

const initialState = {
  pending: false,
  backendRegion: null,
  loginDialogVisible: false
};

export const systemReducer = createReducer(initialState)
  .handleAction(configLoadedAction, (state): ISystemReducerState => (
    { ...state, pending: true }
  ))
  .handleAction(regionLoaded, (state, action: PayloadAction<string, any>): ISystemReducerState => (
    { ...state, backendRegion: action.payload, pending: false }
  ))
  .handleAction(getRegionFailed, (state): ISystemReducerState => (
    { ...state, pending: false }
  ))
  .handleAction(setLoginDialogVisibilityAction, (state, action: PayloadAction<string, boolean>): ISystemReducerState => (
    { ...state, loginDialogVisible: action.payload }
  ));
