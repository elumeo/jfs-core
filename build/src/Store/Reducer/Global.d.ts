import Core from './Core';
declare namespace Global {
    type State = {
        Core: Core.State;
    };
}
declare const Global: import("redux").Reducer<import("redux").CombinedState<Global.State>, import("redux").AnyAction>;
export default Global;
