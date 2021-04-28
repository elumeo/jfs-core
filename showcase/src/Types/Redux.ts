import * as ReduxObservable from 'redux-observable';
import * as TA from 'typesafe-actions';
import * as Action from 'Store/Action';
import { State } from 'Store/Reducer';

export type ActionType = TA.ActionType<typeof Action | TA.EmptyAction<string>>;
export type Epic = ReduxObservable.Epic<ActionType, ActionType, State, {}>;
