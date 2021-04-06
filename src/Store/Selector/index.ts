import { createSelector } from 'reselect';
import { State } from 'Store/Reducer/Global';
import { State as CoreState } from 'Store/Reducer/Core';


const selfSelector = (self: State)=> self;
const coreSelector = (state: State) => state.Core as CoreState

const getCoreStateSelector = createSelector(selfSelector,coreSelector)

export default getCoreStateSelector
