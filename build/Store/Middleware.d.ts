import { Epic } from '../Types/Redux';
export declare const history: import("history").History<unknown>;
declare const middleware: import("redux").StoreEnhancer<{
    dispatch: {};
}, {}>;
export declare const start: (epic: Epic) => void;
export default middleware;
