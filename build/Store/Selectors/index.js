import { createSelector } from 'reselect';
const selfSelector = (self) => self;
const coreSelector = (state) => state.Core;
const getCoreStateSelector = createSelector(selfSelector, coreSelector);
export default getCoreStateSelector;
//# sourceMappingURL=index.js.map