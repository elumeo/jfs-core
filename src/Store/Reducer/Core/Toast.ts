import { createReducer } from 'typesafe-actions';
import * as Action from 'Store/Action';
import { ActionType } from 'Types/Redux';
import { Toast } from 'Types/Toast';

export type State = {
  toasts: Toast[];
};

const initialState: State = {
  toasts: []
};

const equal = (first: Toast, second: Toast) => (
  first.contentMessage !== undefined &&
  first.contentMessage === second.contentMessage ||
  first.contentTranslationId !== undefined &&
  first.contentTranslationId === second.contentTranslationId ||
  first.contentError !== undefined &&
  second.contentError !== undefined &&
  first.contentError.toString() === second.contentError.toString()
);

const Toast = createReducer<State, ActionType>(initialState)
  .handleAction(Action.addToastAction, (state, action) => ({
    ...state,
    toasts: (
      state.toasts.some(toast => equal(toast, action.payload))
        ? state.toasts
        : [action.payload, ...state.toasts]
    )
  }))
  .handleAction(Action.dismissToastAction, state => ({
    ...state,
    toasts: (
      state.toasts.length
        ? state.toasts.slice(1)
        : []
    )
  }))
;

export default Toast;
