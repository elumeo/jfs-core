import { Reducer } from 'redux';
import { State as CoreState } from './Core';
import { ReduxRouterState } from '@lagunovsky/redux-react-router';
export declare type State = {
    Core: CoreState;
    router: ReduxRouterState;
};
declare const Global: Reducer<State>;
export default Global;
