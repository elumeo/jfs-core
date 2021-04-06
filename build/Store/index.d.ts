import * as Redux from 'redux';
import { Epic } from '../Types/Redux';
export declare const create: <T>(epic: Epic, reducer: Redux.Reducer<T, Redux.AnyAction>) => Redux.Store<T & {}, Redux.AnyAction> & {
    dispatch: unknown;
};
declare const _default: Redux.Store<Redux.CombinedState<import("./Reducer/Global").State>, Redux.AnyAction> & {
    dispatch: unknown;
};
export default _default;
