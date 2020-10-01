import {
  Epic as TEpic,
  EpicMiddleware as TEpicMiddleware
} from 'redux-observable';
import * as TAction from 'Store/Action';
import { ActionType } from 'typesafe-actions';
import Global from 'Store/Reducer/Global';
import * as Redux from 'react-redux';

export type State<T extends {} = {}> = Global.State & T;
export type Action<T extends {} = {}> = ActionType<typeof TAction & T>;
export type Dependencies<T extends {} = {}> = T & {};
export type Epic<
  T1 extends {} = {},
  T2 extends {} = {},
  T3 extends {} = {}
> = TEpic<Action<T1>, Action<T1>, State<T2>, Dependencies<T3>>;

export type EpicMiddleware = TEpicMiddleware<Action, Action, State, Dependencies>;

type Selector<T1, T2 extends {} = {}> = (state: Global.State & T2) => T1;

export const useSelector = <T1, T2 extends {} = {}>(
  selector: Selector<T1, T2>
) => Redux.useSelector<Global.State & T2, T1>(selector);
