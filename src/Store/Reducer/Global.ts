import { combineReducers, Reducer } from 'redux';
import Core, { State as CoreState } from './Core';
export type State = {
  Core: CoreState;
} & Record<string, unknown>


const Global: Reducer<State> =
  combineReducers<State>({
    Core,
  });

export default Global;
