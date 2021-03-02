import * as Redux from 'redux';
import { Epic } from '../../Types/Redux';
declare const createStore: <T>(root: Epic, rootReducer: Redux.Reducer<T, Redux.AnyAction>) => Redux.Store<T & {}, Redux.AnyAction> & {
    dispatch: unknown;
};
export default createStore;
