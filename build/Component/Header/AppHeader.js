import React from 'react';
import AppToolbar from './AppToolbar';
export default ({ leftTools, middleTools, rightTools, variant = 'dense' }) => (
// <div className='app-header'>
React.createElement(AppToolbar, { LeftTools: leftTools, MiddleTools: middleTools, RightTools: rightTools, variant: variant })
// </div>
);
//# sourceMappingURL=AppHeader.js.map