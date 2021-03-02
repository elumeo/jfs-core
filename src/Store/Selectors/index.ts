import { createSelector } from 'reselect';
import Core from 'Store/Reducer/Core';
import Global from 'Store/Reducer/Global';


const selfSelector = (self :Global.State)=> self;
const coreSelector = state => state.Core as Core.State

const getCoreStateSelector = createSelector(selfSelector,coreSelector)

export default getCoreStateSelector