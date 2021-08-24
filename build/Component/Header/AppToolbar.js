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
import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import MenuIcon from '@material-ui/icons/Menu';
import useActions from '../../Store/useActions';
import { AppBar, Grid, IconButton, Toolbar, Typography, } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
const AppToolbar = (_a) => {
    var { variant = 'dense', position = 'sticky' } = _a, tools = __rest(_a, ["variant", "position"]);
    const theme = useTheme();
    const { formatMessage } = useIntl();
    const { openNavigation } = useActions();
    const openDrawer = React.useCallback(() => openNavigation(), []);
    return (React.createElement(AppBar, { position: position },
        React.createElement(Toolbar, { disableGutters: true, variant: variant, style: { height: theme.mixins.toolbar.minHeight } },
            React.createElement(Grid, { container: true, justifyContent: 'space-between', alignItems: 'center' },
                React.createElement(Grid, { container: true, item: true, xs: 4, justifyContent: 'flex-start', alignItems: 'center' },
                    React.createElement(IconButton, { color: 'inherit', "aria-label": 'menu', onClick: openDrawer },
                        React.createElement(MenuIcon, null)),
                    React.createElement(Typography, { variant: 'h6', noWrap: true }, formatMessage({ id: 'app.title' })),
                    tools.left || React.createElement(React.Fragment, null)),
                React.createElement(Grid, { container: true, item: true, xs: 4, justifyContent: 'center', alignItems: 'center' }, tools.middle || React.createElement(React.Fragment, null)),
                React.createElement(Grid, { container: true, item: true, xs: 4, justifyContent: 'flex-end', alignItems: 'center' }, tools.right || React.createElement(React.Fragment, null))))));
};
export default memo(AppToolbar);
