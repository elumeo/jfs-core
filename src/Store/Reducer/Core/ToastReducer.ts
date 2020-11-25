import { createReducer, PayloadAction } from 'typesafe-actions';
import { List } from 'immutable';
import { addToastAction, dismissToastAction, } from 'Action/ToastAction';

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

namespace Toast {
  export type State = {
    toasts?: List<IToastConfig>;
  }
}

const initialState: Toast.State = {
  toasts: List<IToastConfig>(),
};

const Toast = createReducer<Toast.State>(initialState)
  .handleAction(addToastAction, (state: Toast.State, action: PayloadAction<string, IToastConfig>): Toast.State => (
    {...state, toasts: state.toasts.unshift(action.payload)}
  ))
  .handleAction(dismissToastAction, (state: Toast.State): Toast.State => {
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
