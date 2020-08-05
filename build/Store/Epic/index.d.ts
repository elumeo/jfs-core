import { Epic } from 'redux-observable';
import { Observable } from 'rxjs';
export declare const wrappedCombineEpics: (...epics: Epic[]) => Epic<any, any, any, any>;
export declare type Hook = <R>(action: any, store: any) => Observable<R>;
export interface IAppHooks {
    beforeLogoutHook?: Hook;
    afterLogoutHook?: Hook;
}
export declare const defaultHooks: IAppHooks;
export declare const createCombineEpics: (hooks?: IAppHooks) => (...epics: any[]) => Epic<any, any, any, any>;
declare const _default: (...epics: any[]) => Epic<any, any, any, any>;
export default _default;
