import * as Action from 'Store/Action';
import { createReducer } from 'typesafe-actions';
import { ActionType } from 'Types/Redux';
import { ThemeVariant } from 'Types/ThemeVariant.type';

export type State = {
  themeVariant: ThemeVariant;
}

const initialState: State = {
  themeVariant: ThemeVariant.LIGHT,
};

const Theme = createReducer<State, ActionType>(
  initialState,
)
  .handleAction(Action.setThemeVariant, (state, { payload }) => ({
    ...state,
    themeVariant: payload
  }))

export default Theme;
