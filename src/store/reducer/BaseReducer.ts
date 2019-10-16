import { addToastAction, changeLanguageAction, dismissToastAction } from '../action/BaseAction';
import { List } from 'immutable';
import { createReducer, PayloadAction } from "typesafe-actions";

export interface IToastConfig {
  contentMessage?: string | null;
  contentTranslationId?: string | null;
  contentError?: any | null;
  isError?: boolean;
  dismissLabel?: string | null;
  [messageParameters: string]: any;
}

export interface IBaseReducerState {
  language?: string | null;
  toasts?: List<IToastConfig>;
}

const initialState: IBaseReducerState = {
  language: null,
  toasts: List<IToastConfig>()
};

// noinspection JSUnusedGlobalSymbols,TypeScriptValidateJSTypes
export const baseReducer = createReducer(initialState)
  .handleAction(changeLanguageAction, (state: IBaseReducerState, action: PayloadAction<string, string>): IBaseReducerState => (
    { ...state, language: action.payload || null }
  ))
  .handleAction(addToastAction, (state: IBaseReducerState, action: PayloadAction<string, IToastConfig>): IBaseReducerState => (
    {...state, toasts: state.toasts.unshift(action.payload)}
  ))
  .handleAction(dismissToastAction, (state: IBaseReducerState): IBaseReducerState => {
    let toastsCount: number;
    let lastToast: IToastConfig, previousToast: IToastConfig;
    let toastsAreEqual: boolean, messagesAreEqual: boolean, translationIdsAreEqual, errorsAreEqual: boolean;
    /* Also remove successive, equal toasts */
    do {
      toastsCount = state.toasts.size;
      if (toastsCount <= 1) {
        state.toasts = state.toasts.shift();
        break;
      }
      lastToast = state.toasts.get(toastsCount - 1);
      previousToast = state.toasts.get(toastsCount - 2);
      state.toasts = state.toasts.shift();
      messagesAreEqual = lastToast.contentMessage != undefined
          && lastToast.contentMessage == previousToast.contentMessage;
      translationIdsAreEqual = lastToast.contentTranslationId != undefined
          && lastToast.contentTranslationId == previousToast.contentTranslationId;
      errorsAreEqual = lastToast.contentError != undefined && previousToast.contentError != undefined
          && lastToast.contentError.toString() == previousToast.contentError.toString();
      toastsAreEqual = messagesAreEqual || translationIdsAreEqual || errorsAreEqual;
    } while (toastsAreEqual);
    return {...state, toasts: state.toasts};
  })
;
