import { Epic as TEpic, EpicMiddleware as TEpicMiddleware } from 'redux-observable';
import * as TAction from '../Store/Action';
import * as TA from 'typesafe-actions';
import * as Global from '../Store/Reducer/Global';
import { CallHistoryMethodAction } from 'connected-react-router';
import { IntlShape } from 'react-intl';
import { History } from 'history';
export declare type State<T extends {} = {}> = Global.State & T;
export declare type ActionType<T extends {} = {}> = TA.ActionType<typeof TAction & T> | CallHistoryMethodAction;
export declare type Dependencies<T extends {} = {}> = T & {
    intl?: () => IntlShape;
    history?: History<unknown>;
};
export declare type Epic<T1 extends {} = {}, T2 extends {} = {}, T3 extends {} = {}> = TEpic<ActionType<T1>, ActionType<T1>, State<T2>, Dependencies<T3>>;
export declare type EpicMiddleware = TEpicMiddleware<ActionType, ActionType, State, Dependencies>;
declare type Selector<T1, T2 extends {} = {}> = (state: Global.State & T2) => T1;
export declare const useSelector: <T1, T2 extends {} = {}>(selector: Selector<T1, T2>) => T1;
export {};
