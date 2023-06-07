import { Reducer } from 'redux';
import { State as CoreState } from './Core';
export declare type State = {
    Core: CoreState;
} & Record<string, unknown>;
declare const Global: Reducer<State>;
export default Global;
