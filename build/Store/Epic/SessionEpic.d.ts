import { Epic, StateObservable } from 'redux-observable';
import Core from "../Reducer/Core";
export declare const beforeLogoutHookEpic: (handleLogoutHook: any) => (action$: any, store: StateObservable<{
    Core: Core.State;
}>) => any;
export declare const afterLogoutHookEpic: (handleLogoutFinished: any) => (action$: any) => any;
declare const _default: Epic<any, any, any, any>;
export default _default;
