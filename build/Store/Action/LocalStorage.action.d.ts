import { State as LocalStorageState } from '../Reducer/Core/LocalStorage.reducer';
export declare const saveToLocalStorage: import("typesafe-actions").PayloadMetaActionCreator<string, string, string>;
export declare const syncLocalStorageToReducer: import("typesafe-actions").PayloadActionCreator<string, Partial<LocalStorageState>>;
