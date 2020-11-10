import React from 'react';
import Toolbar from 'react-md/lib/Toolbars/Toolbar';
import NavigationButton from '../Navigation/NavigationButton';
import International from '../International';
import './AppToolbar.scss';
const AppToolbar = ({ LeftTools, RightTools }) => (React.createElement(International, null, ({ formatMessage }) => (React.createElement(Toolbar, { title: formatMessage({ id: 'app.title' }), nav: React.createElement(NavigationButton, { iconName: "menu" }), colored: true, fixed: true },
    React.createElement("div", { className: "tools" },
        React.createElement("div", { className: "left-tools md-btn--toolbar" },
            React.createElement(LeftTools, null)),
        React.createElement("div", { className: "right-tools md-btn--toolbar" },
            React.createElement(RightTools, null)))))));
export default AppToolbar;
//# sourceMappingURL=AppToolbar.js.map