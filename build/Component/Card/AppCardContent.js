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
import { CardContent } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: props => {
            if (props.overrideCardTitleHeight !== null) {
                return props.overrideCardTitleHeight;
            }
            const cardTitleHeight = props.withSubtitle
                ? theme.spacing(10)
                : theme.spacing(7);
            return props.fullHeight
                ? 'calc(100% - ' + cardTitleHeight + 'px)'
                : 'initial';
        },
    },
}));
const AppCardContent = (props) => {
    const { fullHeight = false, withSubtitle = false, overrideCardTitleHeight = null, children } = props, rest = __rest(props, ["fullHeight", "withSubtitle", "overrideCardTitleHeight", "children"]);
    const classes = useStyles(Object.assign(Object.assign({}, props), { fullHeight,
        withSubtitle,
        overrideCardTitleHeight }));
    return (React.createElement(CardContent, Object.assign({ classes: { root: classes.root } }, rest), children));
};
export default memo(AppCardContent);
