import { State } from '../Reducer/Global';
import { State as CoreState } from '../Reducer/Core';
declare const getCoreStateSelector: import("reselect").OutputSelector<State, CoreState, (res: State) => CoreState>;
export default getCoreStateSelector;
