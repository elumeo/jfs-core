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
import React from 'react';
import { useIntl } from 'react-intl';
import * as MUI from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useActions from '../../Store/useActions';
const Toolbar = (_a) => {
    var { variant = 'dense' } = _a, tools = __rest(_a, ["variant"]);
    const { formatMessage } = useIntl();
    const { openNavigation } = useActions();
    return (React.createElement(MUI.AppBar, { position: 'static' },
        React.createElement(MUI.Toolbar, { disableGutters: true, variant: variant, style: {
                height: 58
            } },
            React.createElement("div", { style: {
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box',
                    paddingRight: 4
                } },
                React.createElement("div", { style: {
                        width: 'calc(100% / 3)',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    } },
                    React.createElement(MUI.IconButton, { color: 'inherit', "aria-label": 'menu', onClick: openNavigation },
                        React.createElement(MenuIcon, null)),
                    React.createElement(MUI.Typography, { variant: 'h6', noWrap: true }, formatMessage({ id: 'app.title' })),
                    tools.left || React.createElement(React.Fragment, null)),
                React.createElement("div", { style: {
                        width: 'calc(100% / 3)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    } }, tools.middle || React.createElement(React.Fragment, null)),
                React.createElement("div", { style: {
                        width: 'calc(100% / 3)',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    } }, tools.right || React.createElement(React.Fragment, null))))));
};
export default Toolbar;
