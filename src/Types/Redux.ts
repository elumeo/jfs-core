/* eslint-disable @typescript-eslint/ban-types */
import {
  Epic as TEpic,
  EpicMiddleware as TEpicMiddleware,
} from 'redux-observable';
import * as TAction from 'Store/Action';
import * as TA from 'typesafe-actions';
import * as Global from 'Store/Reducer/Global';
import * as Redux from 'react-redux';
import { CallHistoryMethodAction } from 'connected-react-router';

export type State<T extends {} = {}> = Global.State & T;
export type ActionType<T extends {} = {}> =
  | TA.ActionType<typeof TAction & T>
  | CallHistoryMethodAction;
export type Dependencies<T extends {} = {}> = T & {};
export type Epic<
  T1 extends {} = {},
  T2 extends {} = {},
  T3 extends {} = {}
> = TEpic<ActionType<T1>, ActionType<T1>, State<T2>, Dependencies<T3>>;

export type EpicMiddleware = TEpicMiddleware<
  ActionType,
  ActionType,
  State,
  Dependencies
>;

type Selector<T1, T2 extends {} = {}> = (state: Global.State & T2) => T1;

export const useSelector = <T1, T2 extends {} = {}>(
  selector: Selector<T1, T2>,
): T1 => Redux.useSelector<Global.State & T2, T1>(selector);
