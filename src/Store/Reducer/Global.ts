import { combineReducers } from 'redux';
import Core, { State as CoreState } from './Core';

export type State = {
  Core: CoreState;
};

const Global = combineReducers<State>({
  Core
});

export default Global;
