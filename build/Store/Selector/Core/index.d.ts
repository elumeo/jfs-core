import { State } from '../../Reducer/Global';
export declare const app: import("reselect").OutputSelector<State, import("../../Reducer/Core/App").State, (res: import("../../Reducer/Core").State) => import("../../Reducer/Core/App").State>;
export declare const configuration: import("reselect").OutputSelector<State, import("../../Reducer/Core/Configuration").State<import("../../../Types/Configuration").Configuration>, (res: import("../../Reducer/Core").State) => import("../../Reducer/Core/Configuration").State<import("../../../Types/Configuration").Configuration>>;
export declare const language: import("reselect").OutputSelector<State, import("../../Reducer/Core/Language").State, (res: import("../../Reducer/Core").State) => import("../../Reducer/Core/Language").State>;
export declare const locale: import("reselect").OutputSelector<State, import("../../Reducer/Core/Locale").State, (res: import("../../Reducer/Core").State) => import("../../Reducer/Core/Locale").State>;
export declare const login: import("reselect").OutputSelector<State, import("../../Reducer/Core/Login").State, (res: import("../../Reducer/Core").State) => import("../../Reducer/Core/Login").State>;
export declare const logout: import("reselect").OutputSelector<State, import("../../Reducer/Core/Logout").State, (res: import("../../Reducer/Core").State) => import("../../Reducer/Core/Logout").State>;
export declare const navigation: import("reselect").OutputSelector<State, import("../../Reducer/Core/Navigation").State, (res: import("../../Reducer/Core").State) => import("../../Reducer/Core/Navigation").State>;
export declare const notification: import("reselect").OutputSelector<State, import("../../Reducer/Core/Notification").State, (res: import("../../Reducer/Core").State) => import("../../Reducer/Core/Notification").State>;
export declare const router: import("reselect").OutputSelector<State, import("../../Reducer/Core/Router").State, (res: import("../../Reducer/Core").State) => import("../../Reducer/Core/Router").State>;
export declare const session: import("reselect").OutputSelector<State, import("../../Reducer/Core/Session").State, (res: import("../../Reducer/Core").State) => import("../../Reducer/Core/Session").State>;
export declare const settings: import("reselect").OutputSelector<State, import("../../Reducer/Core/Settings").State, (res: import("../../Reducer/Core").State) => import("../../Reducer/Core/Settings").State>;
export declare const system: import("reselect").OutputSelector<State, import("../../Reducer/Core/System").State, (res: import("../../Reducer/Core").State) => import("../../Reducer/Core/System").State>;
export declare const toast: import("reselect").OutputSelector<State, import("../../Reducer/Core/Toast").State, (res: import("../../Reducer/Core").State) => import("../../Reducer/Core/Toast").State>;
export declare const webSocket: import("reselect").OutputSelector<State, import("../../Reducer/Core/WebSocket").State, (res: import("../../Reducer/Core").State) => import("../../Reducer/Core/WebSocket").State>;
export * from './App';
