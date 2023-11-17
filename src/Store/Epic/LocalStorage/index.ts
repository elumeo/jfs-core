import { combineEpics } from 'redux-observable';
import init from './init.epic'
import save from './save.epic'
export default combineEpics(init, save)
