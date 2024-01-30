import { combineEpics } from 'redux-observable';
import save from './saveSelection.epic'
export default combineEpics(save)
