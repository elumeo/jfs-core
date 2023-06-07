import { Epic } from 'Types/Redux';
export declare const wrap: (epic: Epic, wrapper: (action$: ReturnType<Epic>) => ReturnType<Epic>) => Epic;
declare const Core: import("redux-observable").Epic<any, any, any, any>;
export default Core;
