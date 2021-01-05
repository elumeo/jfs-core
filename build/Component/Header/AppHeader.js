import React from 'react';
import AppToolbar from './AppToolbar';
export default ({ leftTools, middleTools, rightTools }) => (React.createElement("div", { className: 'app-header' },
    React.createElement(AppToolbar, { LeftTools: leftTools, MiddleTools: middleTools, RightTools: rightTools })));
//# sourceMappingURL=AppHeader.js.map