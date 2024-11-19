import { combineEpics } from 'redux-observable';
import init from './init.epic'
import sync from './sync.epic'
export default combineEpics(init, sync)
