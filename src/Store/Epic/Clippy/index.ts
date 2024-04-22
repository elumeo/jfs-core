import { combineEpics } from 'redux-observable';
import save from './saveSelection.epic'
import handleClippy from './handleClippy.epic'
import handleConfig from './handleConfig.epic'
export default combineEpics(handleClippy, handleConfig, save)
