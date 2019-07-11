import { addToastAction, changeLanguageAction, dismissToastAction } from '../action/BaseAction';
import { List } from 'immutable';
import { createReducer, PayloadAction } from "typesafe-actions";

export interface IToastConfig {
  contentMessage?: string | null;
  contentTranslationId?: string | null;
  contentError?: any | null;
  isError?: boolean;
  dismissLabel?: string | null;
}

export interface IBaseReducerState {
  language?: string | null;
  toasts?: List<IToastConfig>;
}

const initialState: IBaseReducerState = {
  language: null,
  toasts: List<IToastConfig>()
};

export const baseReducer = createReducer(initialState)
  .handleAction(changeLanguageAction, (state: IBaseReducerState, action: PayloadAction<string, string>): IBaseReducerState => (
    {...state, language: action.payload}
  ))
  .handleAction(addToastAction, (state: IBaseReducerState, action: PayloadAction<string, IToastConfig>): IBaseReducerState => (
    {...state, toasts: state.toasts.unshift(action.payload)}
  ))
  .handleAction(dismissToastAction, (state: IBaseReducerState): IBaseReducerState => {
    return {...state, toasts: state.toasts.shift()};
  })
;
