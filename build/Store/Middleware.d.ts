import { Epic } from '../Types/Redux';
export declare const history: import("history").HashHistory;
declare const middleware: import("redux").StoreEnhancer<{
    dispatch: unknown;
}, {}>;
export declare const start: (epic: Epic) => void;
export default middleware;
