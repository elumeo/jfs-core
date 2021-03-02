import * as ReduxObservable from 'redux-observable';
import * as Redux from 'react-redux';
import * as TA from 'typesafe-actions';
import { State } from 'Store/Reducer';
import * as Action from 'Store/Action';

type Selector<T> = (state: State) => T;

export const useSelector = <T>(selector: Selector<T>) => {
  return Redux.useSelector<State, T>(selector);
};

export type ActionType = TA.ActionType<typeof Action | TA.EmptyAction<string>>;

export type Epic = ReduxObservable.Epic<ActionType, ActionType, State, {

}>

export default useSelector;
