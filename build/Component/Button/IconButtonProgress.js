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
import { Box, CircularProgress, IconButton, } from '@material-ui/core';
import { mapToCircularProgressColor, mapToCircularProgressSize, progressStyles, } from '../Button/ButtonProgress';
const IconButtonProgress = forwardRef((props, ref) => {
    const { children, onClick, size = 'medium', color = 'inherit', disabled = false, inProgress = false } = props, rest = __rest(props, ["children", "onClick", "size", "color", "disabled", "inProgress"]);
    const progressClasses = progressStyles(props);
    return (React.createElement(Box, { className: progressClasses.progressWrapper },
        React.createElement(IconButton, Object.assign({ ref: ref, size: size, color: color, disabled: disabled || inProgress, onClick: onClick }, rest), children),
        inProgress && (React.createElement(CircularProgress, { size: mapToCircularProgressSize(size), color: mapToCircularProgressColor(color), className: progressClasses.progress }))));
});
export default memo(IconButtonProgress);
