import { History } from 'history';
import { State as CoreState } from './Core';
import { RouterState } from 'connected-react-router';
export declare type State = {
    Core: CoreState;
    router: RouterState;
};
declare const Global: (history: History) => import("redux").Reducer<import("redux").CombinedState<State>, import("redux").AnyAction>;
export default Global;
