import { Epic as TEpic, EpicMiddleware as TEpicMiddleware } from 'redux-observable';
import * as TAction from '../Store/Action';
import { ActionType } from 'typesafe-actions';
import Global from '../Store/Reducer/Global';
export declare type State<T extends {} = {}> = Global.State & T;
export declare type Action<T extends {} = {}> = ActionType<typeof TAction & T>;
export declare type Dependencies<T extends {} = {}> = T & {};
export declare type Epic<T1 extends {} = {}, T2 extends {} = {}, T3 extends {} = {}> = TEpic<Action<T1>, Action<T1>, State<T2>, Dependencies<T3>>;
export declare type EpicMiddleware = TEpicMiddleware<Action, Action, State, Dependencies>;
declare type Selector<T1, T2 extends {} = {}> = (state: Global.State & T2) => T1;
export declare const useSelector: <T1, T2 extends {} = {}>(selector: Selector<T1, T2>) => T1;
export {};
