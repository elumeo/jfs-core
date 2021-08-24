import { createReducer } from 'typesafe-actions';
import * as Action from 'Store/Action';
import * as Type from 'Types/Language';
import _ from 'lodash';
import { ActionType } from 'Types/Redux';

export type State = {
  language: Type.Language;
  messages: Record<string, Record<string, string>>;
};

const initialState: State = {
  language: null,
  messages: null
};

const Language = createReducer<State, ActionType>(initialState)
  .handleAction(
    Action.changeLanguageAction,
    (state, action) => ({
      ...state,
      language: action.payload
    })
  )
  .handleAction(
    Action.initializeApp,
    (state, { payload: { translations } }) => ({
      ...state,
      messages: translations
    })
  );

export default Language;
