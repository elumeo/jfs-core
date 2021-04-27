import * as Redux from 'redux';
import { State } from './Reducer/Global';
import { Epic } from '../Types/Redux';
export declare const create: <T>(epic: Epic, reducer: Redux.Reducer<T, Redux.AnyAction>) => Redux.Store<T & {}, Redux.AnyAction> & {
    dispatch: unknown;
};
declare const _default: Redux.Store<Redux.CombinedState<State>, Redux.AnyAction>;
export default _default;
