var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';
import * as MUI from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useActions from '../../Store/useActions';
const Toolbar = (_a) => {
    var { variant = 'dense' } = _a, tools = __rest(_a, ["variant"]);
    const { formatMessage } = useIntl();
    const { openNavigation } = useActions();
    const openSettings = useCallback(() => {
        openNavigation();
    }, [openNavigation]);
    return (React.createElement(MUI.AppBar, { position: 'static', className: 'tools' },
        React.createElement(MUI.Toolbar, { disableGutters: true, variant: variant },
            React.createElement(MUI.IconButton, { color: 'inherit', "aria-label": 'menu', onClick: openSettings },
                React.createElement(MenuIcon, null)),
            React.createElement(MUI.Typography, { variant: 'h6' }, formatMessage({ id: 'app.title' })),
            React.createElement("div", { className: 'tools__toolbar' },
                React.createElement("div", { className: 'left-tools' }, tools.left || React.createElement(React.Fragment, null)),
                React.createElement("div", { className: 'middle-tools' }, tools.middle || React.createElement(React.Fragment, null)),
                React.createElement("div", { className: 'right-tools' }, tools.right || React.createElement(React.Fragment, null))))));
};
export default Toolbar;
//# sourceMappingURL=Toolbar.js.map