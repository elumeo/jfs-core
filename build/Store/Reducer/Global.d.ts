import { State as CoreState } from './Core';
export declare type State = {
    Core: CoreState;
};
declare const Global: import("redux").Reducer<import("redux").CombinedState<State>, import("redux").AnyAction>;
export default Global;
