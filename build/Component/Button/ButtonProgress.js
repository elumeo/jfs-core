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
import React, { forwardRef, memo } from 'react';
import { Box, Button, CircularProgress } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
export const progressStyles = makeStyles(() => createStyles({
    progressWrapper: {
        position: 'relative'
    },
    progress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: (props) => mapToCircularProgressSize(props.size) / 2 * -1,
        marginLeft: (props) => mapToCircularProgressSize(props.size) / 2 * -1
    }
}));
export const mapToCircularProgressSize = (size) => {
    switch (size) {
        case 'large':
            return 28;
        case 'small':
            return 20;
        default:
            return 24;
    }
};
export const mapToCircularProgressColor = (color) => color === 'default' ? 'inherit' : color;
const ButtonProgress = forwardRef((props, ref) => {
    const { children, onClick, size = 'medium', color = 'inherit', disabled = false, inProgress = false } = props, rest = __rest(props, ["children", "onClick", "size", "color", "disabled", "inProgress"]);
    const progressClasses = progressStyles(props);
    return React.createElement(Box, { className: progressClasses.progressWrapper },
        React.createElement(Button, Object.assign({ ref: ref, size: size, color: color, disabled: disabled || inProgress, onClick: onClick }, rest), children),
        inProgress && React.createElement(CircularProgress, { size: mapToCircularProgressSize(size), color: mapToCircularProgressColor(color), className: progressClasses.progress }));
});
export default memo(ButtonProgress);
