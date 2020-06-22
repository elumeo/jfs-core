import { Epic } from 'redux-observable';
import { Observable } from 'rxjs';
export declare const wrappedCombineEpics: (...epics: Epic<any, any, any, any>[]) => any;
export declare type Hook = <R>(action: any, store: any) => Observable<R>;
export interface IAppHooks {
    beforeLogoutHook?: Hook;
    afterLogoutHook?: Hook;
}
export declare const defaultHooks: IAppHooks;
export declare const createCombineEpics: (hooks?: IAppHooks) => (...epics: any[]) => any;
declare const _default: (...epics: any[]) => any;
export default _default;
