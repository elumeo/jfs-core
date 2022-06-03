import { ActionType } from 'Types/Redux';
import { createReducer } from 'typesafe-actions';
import * as Action from '../../Action'

export type State = {
    callstack: unknown[];
    limit: number
}

const intialState: State = {
    callstack: [],
    limit: 10
}

const Debugger = createReducer<State, ActionType>(intialState)
    .handleAction(Action.configLoadedAction, (state, action) => ({
        ...state,
        limit: action.payload.config.DebugCallstackLimit,
    }))
    .handleAction(Action.Debug.log, (state, { payload }) => ({ ...state, callstack: [...state.callstack, payload].slice(-state.limit) }))

export default Debugger