import { Reducer } from 'redux';
import { State as CoreState } from './Core';
export type State = {
    Core: CoreState;
} & Record<string, unknown>;
declare const Global: Reducer<State>;
export default Global;
