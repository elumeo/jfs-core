import { createReducer } from 'typesafe-actions';
import { List } from 'immutable';
import * as Action from 'Store/Action';
import { ActionType } from 'Types/Redux';

export interface IToastConfig {
  contentMessage?: string | null;
  contentTranslationId?: string | null;
  contentTranslationValues?: {};
  contentError?: any | null;
  isError?: boolean;
  isSuccess?: boolean;
  dismissLabel?: string | null;

  [messageParameters: string]: any;
}

export type State = {
  toasts?: List<IToastConfig>;
}

const initialState: State = {
  toasts: List<IToastConfig>(),
};

const Toast = createReducer<State, ActionType>(initialState)
  .handleAction(Action.addToastAction, (state: State, action) => (
    {...state, toasts: state.toasts.unshift(action.payload)}
  ))
  .handleAction(Action.dismissToastAction, state => {
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

export default Toast;
