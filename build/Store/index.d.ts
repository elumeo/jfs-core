import * as Redux from 'redux';
import { Epic } from '../Types/Redux';
export declare const create: <T>(epic: Epic, reducer: Redux.Reducer<T, Redux.AnyAction>) => Redux.Store<T & {}, Redux.AnyAction> & {
    dispatch: {};
};
