import { combineEpics } from 'redux-observable';
import save from './save.epic'
export default combineEpics(save)
