import { History } from 'history';
import { Reducer } from 'redux';
import { State as CoreState } from './Core';
import { RouterState } from 'connected-react-router';
export type State = {
    Core: CoreState;
    router: RouterState;
} & Record<string, unknown>;
declare const Global: (history: History) => Reducer<State>;
export default Global;
