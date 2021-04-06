import React from 'react';
import { Icon as FontIcon } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
const Icon = ({ variant }) => {
    const { palette } = useTheme();
    const iconName = React.useMemo(() => {
        if (variant === 'error') {
            return 'cancel';
        }
        else if (variant === 'default') {
            return 'alert';
        }
        else if (variant === 'success') {
            return 'check';
        }
        else {
            return variant;
        }
    }, [variant]);
    // const classes = useStyles(variant)();
    console.log({ variant, iconName, test1: palette === null || palette === void 0 ? void 0 : palette[variant] });
    return (iconName
        ? (React.createElement(FontIcon, { color: 'inherit' }, iconName))
        : null);
};
export default Icon;
//# sourceMappingURL=Icon.js.map